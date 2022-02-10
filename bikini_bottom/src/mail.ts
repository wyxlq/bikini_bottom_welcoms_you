import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter = null;

export const initMail = () => {
  transporter = nodemailer.createTransport({
    auth: {
      user: 'wanyuxiao@souche.com',
      pass: 'Zz1234zZ',
    },
    authMethod: 'PLAIN',
    host: 'smtp.qiye.aliyun.com',
    port: 465,
    secure: true,
  });
};
export const getTransporter = () => transporter;
