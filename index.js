const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var http = require('http');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', require('./api'));

var server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Listening at Port', PORT);
});

module.exports = app;
