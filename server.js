const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const apiRouter = require('./server/src/routes/apiRouter');

const app = express();

app.use('/api', apiRouter);
app.use('/', serveStatic(path.join(__dirname, '/client/dist')))
app.get('/.*/', function (req, res) {
    res.sendFile(__dirname + '/client/dist/index.html');
});

const start = () => {
  try {
    // Add connection to DB
    app.listen(8080, () => {
      console.log('Server is running');
    });
  } catch (error) {
    console.log(`Error on server setup: ${error}`)
  }
}

start();
