import express from 'express';
import { getWsApp, initWs } from './wss';
import * as interview from './controllers/interview';

const app = express();

initWs(app);

app.use(async function (req, res, next) {
  res.sendData = jsonData => {
    res.json({
      success: true,
      data: jsonData,
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
app.post('/api/createInterview', interview.createInterview);
app.post('/api/updateInterview', interview.updateInterview);

getWsApp().app.ws('/api/ws/interview', interview.interviewWebSocket);

export default app;
