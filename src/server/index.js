import express from 'express';
import html from '../client/components/html-template';

const app = express();
const port = 5000;

app.get('/', (req, res) => res.send(html));
app.get('/api/state', (req, res) => res.json({
    playerId: 1234,
    playerName: 'Jack Black',
    balance: 1000
}));
app.use(express.static('dist'))

app.listen(port, () => console.log(`Monte Carlo is listening on port ${port}!`));
