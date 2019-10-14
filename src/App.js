import React from 'react';
import HOMEPAGE from './pages/homepage/homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import Signinup from './pages/signin/signin-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
  super();

this.state = {
  currentUser: null

}
  }
   
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {this.setState({

          currentUser:{id:snapShot.id,...snapShot.data()
          }
        })
      });
   
      }
      this.setState({currentUser: userAuth});

      
    
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={HOMEPAGE} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={Signinup} />
      </Switch>
    </div>
  );
}}

export default App;
