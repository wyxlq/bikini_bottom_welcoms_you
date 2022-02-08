import { RequestHandler } from 'express';
import type expressWs from 'express-ws';
import { v4 as uuidv4 } from 'uuid';
import { getWsApp } from '../wss';

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
  interviewerEmail: string;
}
const interviews: Record<string, InterviewDetail> = {};

export const readInterview: RequestHandler<{
  id: string;
}> = (req, res) => {
  const id = req.query.id;
  if (typeof id === 'string') {
    res.sendData(interviews[id]);
  }
  res.sendData();
};
export const createInterview: RequestHandler<
  any,
  any,
  {
    intervieweeName: string;
    intervieweeEmail: string;
    interviewerEmail: string;
  }
> = (req, res) => {
  const { intervieweeName, intervieweeEmail, interviewerEmail } = req.body;
  const detail: InterviewDetail = {
    id: uuidv4(),
    createdTime: Date.now(),
    value: '',
    intervieweeName,
    intervieweeEmail,
    interviewerEmail,
  };
  interviews[detail.id] = detail;
  res.sendData(detail.id);
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
  if (interviews[id]) {
    interviews[id].value = value;
  }
  res.sendData();
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
        if (value && interviews[id]) {
          interviews[id].value = value;
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
        if (interviews[id]) {
          ws.send(getBuffer(WSTypes.getValue, interviews[id].value));
        }
        return;
    }
  });
};
