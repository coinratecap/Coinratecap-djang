import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import coins from './components';
import exchanges from './components/exchanges';
import nfts from './components/nfts';
import wallets from './components/wallets';
import blogs from './components/blog';
import submitcoin from './components/submitcoin';




function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={coins} />
        <Route path='/exchanges' component={exchanges} />
        <Route path='/nfts' component={nfts} />
        <Route path='/wallets' component={wallets} />
        <Route path='/blogs' component={blogs} />
        <Route path='/submitcoin' component={submitcoin} />

      </Switch>
    </Router>
  );
}

export default App;

