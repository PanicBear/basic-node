import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({ origin: ['http://127.0.0.1:5500'], optionsSuccessStatus: 200, credentials: true }));

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(8080);
