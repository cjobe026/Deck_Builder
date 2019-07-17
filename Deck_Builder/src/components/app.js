import React from 'react';
import Top from './main.js'
import Choose from './choose.js'
import './App.css';



class App extends React.Component {
  
  state = {
    page:Choose
  };


   Lol(){
     if(this.props)
    return <this.state.page/>
  }

 render() {
  return (
    <div className="App">
    <Top/>
    <div>
      {this.Lol()}
      </div>
    
</div>       
  );
}
}
export default App;
