import React from 'react';
import './App.scss';
import Weather from '../customPage/Weather/Weather';


class App extends React.Component{
  render(){
    return(
      <div className="App">
          <Weather/>
      </div>
    )
  }
}

export default App;
