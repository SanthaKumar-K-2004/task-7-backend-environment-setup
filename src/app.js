const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Task 7 backend environment is running.'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  });
});

module.exports = app;
