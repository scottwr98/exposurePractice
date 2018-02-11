import React, { Component } from 'react';
import myPrize from './images/prize.jpg';
import './App.css';
import SentimentIndicator from './components/SentimentIndicator'

class App extends Component {
  indicators() {
    return this.props.indicators.map((indicator)=>{
      return <div key = { indicator.name }>
                <SentimentIndicator 
                  name = { indicator.name } 
                  value = { indicator.value }/>
                <button 
                  onClick={() => { this.props.setIndicatorValue(indicator.name, Math.floor(Math.random() * 100) ) } }>Change { indicator.name } 
                </button>                
              </div>              
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ myPrize } className="App-logo" alt="lets win" />
        </header>
        <h1>Super awesome sentiment indicators!!!!</h1>
        { this.indicators() }
      </div>
    );
  };
};

export default App;
