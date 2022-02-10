import type { Express } from 'express';
import expressWs from 'express-ws';

let wsInstance: expressWs.Instance = null;

export const initWs = (app: Express) => {
  // Sets up express-ws on the specified app.
  // This will modify the global Router prototype for Express as well.
  wsInstance = expressWs(app);
};
export const getWsInstance = () => wsInstance;
