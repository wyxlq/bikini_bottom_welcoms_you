import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

let transporter: Transporter<SMTPTransport.SentMessageInfo> = null;
export const initEmail = () => {
  transporter = nodemailer.createTransport({
    host: 'smtp.qiye.aliyun.com',
    port: 465,
    secure: true,
    auth: {
      user: 'wanyuxiao@souche.com',
      pass: 'Zz1234zZ',
    },
  });
  return transporter;
};
export const sendEmail = ({
  to,
  subject,
  text,
  html,
}: {
  to: string | Array<string>;
  subject: string;
  text: string;
  html: string;
}) =>
  transporter.sendMail({
    from: `"万裕晓" <wanyuxiao@souche.com>`,
    to,
    subject,
    text,
    html,
  });
