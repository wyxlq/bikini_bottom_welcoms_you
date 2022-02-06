declare namespace Express {
  export interface Response {
    sendData: (value?: any) => void;
  }
}
