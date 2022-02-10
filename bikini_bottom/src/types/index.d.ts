declare namespace Express {
  export interface Response {
    sendData: (val?: {
      data?: any;
      message?: string;
      success?: boolean;
    }) => void;
  }
}
