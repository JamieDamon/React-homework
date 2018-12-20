import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'  ;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Happy'>Happy</Link>
          <Link to='/Sleepy'>Sleepy</Link>
          <Link to='/Guilty'>Guilty</Link>
          <Route path='/Happy' component={Happy}></Route>
          <Route path='/Sleepy' component={Sleepy}></Route>
          <Route path='/Guilty' component={Guilty}></Route>
      </div>
    </Router>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
