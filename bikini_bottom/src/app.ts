import express from 'express';
import { initEmail } from './email';
import { getWsApp, initWs } from './wss';
import * as interview from './controllers/interview';

const app = express();

initEmail();
initWs(app);

app.use(async function (req, res, next) {
  res.sendData = ({ data, message = '', success = true }) => {
    res.json({
      data,
      message,
      success,
    });
  };
  next();
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set('port', 7000);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/readInterview', interview.readInterview);
app.get('/api/readInterviews', interview.readInterviews);
app.post('/api/createInterview', interview.createInterview);
app.post('/api/updateInterview', interview.updateInterview);

getWsApp().app.ws('/api/ws/interview', interview.interviewWebSocket);

export default app;
