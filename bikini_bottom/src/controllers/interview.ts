import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getTransporter } from '../email';
import { getWsApp } from '../wss';

import type expressWs from 'express-ws';
import type WebSocket from 'ws';

interface IWebSocket extends WebSocket {
  interviewId?: string;
  uuid?: string;
}

const encode = new TextEncoder();
const decode = new TextDecoder('utf-8');

enum WSTypes {
  heartbeat = '.',
  setValue = '0',
  getValue = '1',
}

const getBuffer = (type: WSTypes, str: string) => {
  const arr = encode.encode(str);
  const newBuffer = new Uint8Array(arr.byteLength + 1);
  newBuffer.set(encode.encode(type), 0);
  newBuffer.set(arr, 1);
  return newBuffer;
};

interface InterviewDetail {
  id: string;
  value: string;
  createdTime: number;
  intervieweeName: string;
  intervieweeEmail: string;
  interviewerName: string;
  interviewerEmail: string;
}
const interviewDict: Record<string, InterviewDetail> = {};

export const readInterview: RequestHandler<{
  id: string;
}> = (req, res) => {
  const id = req.query.id;
  if (typeof id === 'string') {
    res.sendData({
      data: interviewDict[id],
    });
  }
  res.sendData({
    message: '查询失败，参数 id 缺失',
    success: false,
  });
};
export const readInterviews: RequestHandler = (req, res) => {
  const interviews = Object.keys(interviewDict).map(
    interviewId => interviewDict[interviewId]
  );
  res.send({
    data: interviews,
  });
};

export const createInterview: RequestHandler<
  any,
  any,
  {
    intervieweeName: string;
    intervieweeEmail: string;
    interviewerName: string;
    interviewerEmail: string;
  }
> = async (req, res) => {
  const {
    intervieweeName,
    intervieweeEmail,
    interviewerName,
    interviewerEmail,
  } = req.body;
  const detail: InterviewDetail = {
    id: uuidv4(),
    createdTime: Date.now(),
    value: '',
    intervieweeName,
    intervieweeEmail,
    interviewerName,
    interviewerEmail,
  };

  interviewDict[detail.id] = detail;

  let message: string = '';
  try {
    const transporter = getTransporter();
    try {
      await transporter.sendMail({
        from: '"大搜车笔试专用邮箱" <wanyuxiao@souche.com>',
        to: intervieweeEmail,
        subject: '大搜车笔试邀请',
        text: '欢迎参加大搜车笔试',
        html:
          `<div>hi，${
            intervieweeName || ''
          }同学，您好，请点击<a href="http://172.18.68.4:3000/#/interview-room/detail?id=` +
          detail.id +
          '">链接</a>进入笔试间</div>',
      });
    } catch (error) {
      message = `面试者邮件发送失败，请手动拷贝笔试链接给面试者，${error.message}！！！`;
    }
    try {
      await transporter.sendMail({
        from: '"大搜车笔试专用邮箱" <wanyuxiao@souche.com>',
        to: interviewerEmail,
        subject: '大搜车笔试邀请',
        text: '欢迎参加大搜车笔试',
        html:
          `<div>hi，${
            interviewerName || ''
          }面试官，您好，请点击<a href="http://172.18.68.4:3000/#/interview-room/detail?id=` +
          detail.id +
          '">链接</a>进入笔试间</div>',
      });
    } catch (error) {
      message += `面试官邮件发送失败，${error.message}！！！`;
    }
  } finally {
    res.sendData({
      data: detail.id,
      message,
      success: !message,
    });
  }
};
export const updateInterview: RequestHandler<
  any,
  any,
  {
    id: string;
    value: string;
  }
> = (req, res) => {
  const { id, value } = req.body;
  if (id) {
    if (interviewDict[id]) {
      interviewDict[id].value = value;
      res.send({
        data: id,
      });
    } else {
      res.sendData({
        message: '更新失败，未查询到该 id 相应的数据',
        success: false,
      });
    }
  } else {
    res.sendData({
      message: '更新失败，参数 id 缺失',
      success: false,
    });
  }
  if (id && interviewDict[id]) {
    interviewDict[id].value = value;
    res.send({
      data: id,
    });
  }
};

export const interviewWebSocket: expressWs.WebsocketRequestHandler = (
  ws: IWebSocket,
  req
) => {
  const id = req.query.id as string;
  ws.interviewId = id;
  ws.uuid = uuidv4();
  ws.on('message', msg => {
    if (!ArrayBuffer.isView(msg)) {
      return;
    }
    const [type] = msg;
    const valueBytes = msg.slice(1);
    const value = decode.decode(valueBytes);
    switch (type) {
      case encode.encode(WSTypes.heartbeat)[0]:
        ws.send(getBuffer(WSTypes.heartbeat, id));
        return;
      case encode.encode(WSTypes.setValue)[0]:
        if (value && interviewDict[id]) {
          interviewDict[id].value = value;
          getWsApp()
            ?.getWss()
            ?.clients?.forEach((wsItem: IWebSocket) => {
              console.log('ws', wsItem.interviewId, wsItem.uuid, ws.uuid);
              if (wsItem.interviewId === id && wsItem.uuid !== ws.uuid) {
                wsItem.send(getBuffer(WSTypes.getValue, value));
              }
            });
        }
        return;
      case encode.encode(WSTypes.getValue)[0]:
        if (interviewDict[id]) {
          ws.send(getBuffer(WSTypes.getValue, interviewDict[id].value));
        }
        return;
    }
  });
};
