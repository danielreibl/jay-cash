import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Hall from './components/hall';
import Roulette from './components/roulette';
import Blackjack from './components/blackjack';
import Slotmachine from './components/slotmachine';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Hall}/>
      <Route path='/roulette' component={Roulette}/>
      <Route path='/blackjack' component={Blackjack}/>
      <Route path='/slotmachine' component={Slotmachine}/>
    </Switch>
  </HashRouter>, document.getElementById('app')
);
