import React from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>
Valor atual
          {this.state.counter}
        </h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
