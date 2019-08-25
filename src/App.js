import React from 'react';

import {Switch, Route} from 'react-router-dom';

import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route 
          path = '/shop' component = {ShopPage}>
        </Route>
        <Route
          exact path = '/' component = {HomePage}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
