import React from 'react';
import magnifier from '../images/magnifier.png';
import stack from '../images/stack.png';
import Build from './build.js';
import PropTypes from 'prop-types'
import Search from './search.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  class Choose extends React.Component {
     build() {
      return (<Build/>)
      
    }
     search() {
      return(
        <Search/>
      )
    }
render(){
  return(
<Router>   
<div className="grid-container">
<div className="left">

        <Link to="/build"><img className="choice" src={stack} alt="Deck Builder"/><h2>Build</h2></Link>

      </div>
<div className="right">   <Link to="/search" ><img className="choice" src={magnifier} alt="Deck Builder"/><h2>Search</h2></Link>
</div>

</div>


<Route path="/build" exact component={this.build} />
  <Route path="/search/" component={this.search} />
  </Router> 
  )}
  }


export default Choose 