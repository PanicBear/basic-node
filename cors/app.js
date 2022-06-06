import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(helmet());


app.use(cors({ origin: ['http://127.0.0.1:5500'], optionsSuccessStatus: 200, credentials: true }));

app.get('/', (req, res) => {
  console.log(req.body)
  console.log(req.cookies)
  res.send('test');
});

app.listen(8080);
