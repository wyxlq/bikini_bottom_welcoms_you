import { useEffect, useState } from 'react';
import { WSTypes } from './constants';

const encode = new TextEncoder();

export const getBuffer = (type: WSTypes, str: string = '') => {
  const arr = encode.encode(str);
  const newBuffer = new Uint8Array(arr.byteLength + 1);
  newBuffer.set(encode.encode(type), 0);
  newBuffer.set(arr, 1);
  return newBuffer;
};

export const useWebSocket = (id: string) => {
  const [socketInstance, setSocket] = useState<WebSocket>();
  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:7000/api/ws/interview?id=${id}`);
    setSocket(socket);
    socket.addEventListener('open', function () {
      socket.send(getBuffer(WSTypes.getValue));
    });
    const intervalTimer = setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(getBuffer(WSTypes.heartbeat));
      }
    }, 5000);
    return () => {
      socket.close();
      clearInterval(intervalTimer);
    };
  }, [id]);
  return socketInstance;
};
export const useCodeFromRemote = (socket?: WebSocket) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    if (socket) {
      socket.addEventListener('message', async e => {
        if (!(e.data instanceof Blob)) {
          return;
        }
        const text = await e.data.text();
        const type = text[0];
        if (type === WSTypes.getValue) {
          const value = text.slice(1);
          if (value) {
            setCode(value || '');
          }
        }
      });
    }
  }, [socket]);
  return code;
};
