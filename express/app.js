import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
const app = express();

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('first1');
//     next('route');
//   },
//   (req, res, next) => {
//     console.log('first2');
//     next();
//   },
// );

// app.get('/', (req, res, next) => {
//   res.send('second');
//   console.log('second');
// });

// app.get('/error', (req, res, next) => {
//   console.log('error page');
//   next(new Error('error page'));
// });

// app.use((req, res, next) => {
//   res.status(404).send('Not available');
// });

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later');
// });

// app.use(express.json());

// app.post('/', (req, res, next) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.use(express.json());

app.get('/file1', (req, res) => {
  // try {
  //   fs.readFileSync('/file.txt');
  // } catch (error) {
  //   res.status(404).send('File not found with sync');
  // }

  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.status(404).send('File not found with async');
    }
  });
});

app.get('/file2', (req, res, next) => {
  fsAsync.readFile('/file.txt').catch((error) => next(error));
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file.txt');
  } catch (error) {
    res.status(404).send('file not found');
  }
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
