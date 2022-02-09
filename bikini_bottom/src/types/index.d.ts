declare namespace Express {
  export interface Response {
    sendData: (value?: {
      data?: any;
      message?: string;
      success?: boolean;
    }) => void;
  }
}
