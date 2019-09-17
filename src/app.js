// const express = require('express');
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.render('Hello world');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
