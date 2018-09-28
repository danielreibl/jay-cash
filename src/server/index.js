import express from 'express';

const axios = require('axios');
const bodyParser = require('body-parser');

import html from '../client/components/html-template';

const app = express();
const port = 5000;
const TARGET_URL = 'http://hackathon.guidesmiths.com:4000';
const GAME_ID = 'jay-cash';

app.get('/', (req, res) => res.send(html));

app.use(bodyParser.json());

app.get('/api/user/:userName', async (req, res) => {
  const userResponse = await axios.post(`${TARGET_URL}/api/user`, {
    name: req.params.userName,
  });

  return res.json(userResponse.data);
});

app.post('/api/bet', async (req, res) => {
  const { userName, bet, change } = req.body;
  const betResponse = await axios.post(`${TARGET_URL}/api/nav/log`, {
    bet,
    change,
    userName,
    gameId: GAME_ID,
  });

  return res.json(betResponse.data);
});

app.use(express.static('dist'));

app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500);
});

app.listen(port, '0.0.0.0', () => console.log(`JayCash is listening on port ${port}!`));
