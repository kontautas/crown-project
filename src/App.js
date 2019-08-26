import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import './App.css';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        
        <Header currentUser = {this.state.currentUser}>
        </Header>
        
        <Switch>
          <Route 
            path = '/shop' component = {ShopPage}>
          </Route>
          <Route
            exact path = '/' component = {HomePage}>
          </Route>
          <Route
            path = '/signin' component = {SignInAndSignOut}>  
          </Route>
        </Switch>
  
      </div>
    );
  }
}


export default App;
