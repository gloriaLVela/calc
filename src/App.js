import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      current: '0',
      previous: []
    }
  }

  reset = () => {
    this.setState({ result: '0' });
  }

  addToCurrent = (symbol) => {
    this.setState({ current: this.state.current + symbol });
  }
  render() {

    const buttons = [
      { symbol: 'C', cols: 3, action: this.reset },
      { symbol: '/', cols: 3, action: this.reset },
      { symbol: '7', cols: 3, action: this.reset },
      { symbol: '8', cols: 3, action: this.reset },
      { symbol: '9', cols: 3, action: this.reset },
      { symbol: 'x', cols: 3, action: this.reset },
      { symbol: '4', cols: 3, action: this.reset },
      { symbol: '5', cols: 3, action: this.reset },
      { symbol: '6', cols: 3, action: this.reset },
      { symbol: '-', cols: 3, action: this.reset },
      { symbol: '1', cols: 3, action: this.reset },
      { symbol: '2', cols: 3, action: this.reset },
      { symbol: '3', cols: 3, action: this.reset },
      { symbol: '+', cols: 3, action: this.reset },
      { symbol: '0', cols: 3, action: this.reset },
      { symbol: '.', cols: 3, action: this.reset },
      { symbol: '=', cols: 3, action: this.reset }

    ];
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current} />
        {
          buttons.map((btn, i) => {
            return <Button symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action} />
          })
        }
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
