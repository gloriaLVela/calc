import React, { Component } from 'react';
import Button from './Components/Button';

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      current: '0',
      previous: []
    }
  }

  reset = () => {
    this.setState({result: '0'});
  }
  render() {

    const buttons = [
      { symbol: 'C', cols: 1, action: this.reset }
    ];
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current} />

      </div>
    );
  }

}


//["CE", "C", "Delete", "/", 
//                      "7", "8", "9", "x", 
//                      "4", "5", "6", "-", 
//                      "1", "2", "3", "+", 
//                      "+-", "0", ".", "="];
//   ];

export default App;
