import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser}  = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef =  await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route 
            path = '/shop' component = {ShopPage}>
          </Route>
          <Route
            exact path = '/' component = {HomePage}>
          </Route>
          <Route
            exact
            path = '/signin' component = {SignInAndSignOut}/* render =  {() => 
              this.props.currentUser ? (
              <Redirect to='/'/>
              ) : (
              <SignInAndSignOut/>
              )}*/>  
              
          </Route>
          <Route exact path = '/checkout' component = {CheckoutPage} />
        </Switch>
  
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
    currentUser: setCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
