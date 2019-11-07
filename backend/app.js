const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', (req, res, next) => {
  const msgs = [
    {
      userName: 'lalal12',
      msgBody: 'first msg',
      index: null
    },
    {
      userName: 'lalal1222',
      msgBody: 'second msg',
      index: null
    },
    {
      userName: 'lalal3',
      msgBody: 'second msg',
      index: null
    }
  ]
  res.status(200).json({
    message: 'msgs fetched successfully',
    msgs: msgs
  });
});


module.exports = app;
