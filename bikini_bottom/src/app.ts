import express from 'express';
import { initMail } from './mail';
import { getWsInstance, initWs } from './ws';
import * as interview from './controllers/interview';

const app = express();

initMail();
initWs(app);

app.set('port', 7000);

app.use(async function (req, res, next) {
  res.sendData = ({ data = null, message = '', success = true }) => {
    res.json({
      data,
      message,
      success,
    });
  };
  next();
});

// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get('/', (req, res) => {
  res.send('BiKiNi Bottom Welcomes You!');
});
app.get('/api/readInterview', interview.readInterview);
app.get('/api/readInterviews', interview.readInterviews);
app.post('/api/createInterview', interview.createInterview);
app.post('/api/updateInterview', interview.updateInterview);

getWsInstance().app.ws('/api/ws/interview', interview.interviewWebSocket);

export default app;
