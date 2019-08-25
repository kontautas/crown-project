import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div>
      
      <Header>
      </Header>
      
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
