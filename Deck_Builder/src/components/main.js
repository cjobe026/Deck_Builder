import React from 'react';
import logo from '../images/melon.png';

function Top() {
return(
          <header className="App-header">
        <div className='head'>

  <div className='child inline-block-child'><img src={logo} className="App-logo" alt="Deck Builder" /></div>
  <div className='child inline-block-child'>        <h1>Deck Builder</h1></div>
</div>

      </header>
)
}
export default Top