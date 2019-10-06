import React from 'react';
import HOMEPAGE from './pages/homepage/homepage.component'
import './App.css';
import {Route, Link} from 'react-router-dom';

const Hatspage=(props)=>(
<div>
  <Link to="/topics">topics</Link>
  <h1>HATS PAGE{console.log(props)}</h1>
</div>

);

function App() {
  return (
    <div >
      
      <Route exact path="/" component={HOMEPAGE} />
      <Route path="/hats" component={Hatspage} />
      
  
    </div>
  );
}

export default App;
