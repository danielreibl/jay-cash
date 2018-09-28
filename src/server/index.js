import express from 'express';

const axios = require('axios');

import html from '../client/components/html-template';

const app = express();
const port = 5000;
const TARGET_URL = 'http://hackathon.guidesmiths.com:4000';

app.get('/', (req, res) => res.send(html));

app.get('/api/user/:userName', async (req, res) => {
  const userResponse = await axios.post(`${TARGET_URL}/api/user`, {
    name: req.params.userName,
  });

  return res.json(userResponse.data);
});

app.get('/api/state/:userId', (req, res) => res.json({
  _id: '5baa2c26533d6fb80f51c00c',
  name: 'kunb',
  displayName: 'Kun Bela',
  coin: 1000
}));
app.use(express.static('dist'));

app.listen(port, '0.0.0.0', () => console.log(`JayCash is listening on port ${port}!`));
