import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends React.Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Valor atual {this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
