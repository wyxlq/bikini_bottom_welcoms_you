import expressWs from 'express-ws';

import type { Express } from 'express';

let wsApp: expressWs.Instance = null;

export const initWs = (app: Express) => {
  wsApp = expressWs(app);
};
export const getWsApp = () => wsApp;
