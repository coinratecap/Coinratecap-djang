import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import coins from './pages';
import exchanges from './pages/exchanges';
import nfts from './pages/nfts';
import wallets from './pages/wallets';
import blogs from './pages/blogs';




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

      </Switch>
    </Router>
  );
}

export default App;

