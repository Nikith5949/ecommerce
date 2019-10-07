import React from 'react';
import HOMEPAGE from './pages/homepage/homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'


function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={HOMEPAGE} />
      <Route path="/shop" component={ShopPage} />
 
      </Switch>
    </div>
  );
}

export default App;
