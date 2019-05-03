import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends React.Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends React.Component {
  handleClick() {
    alert("botão clicado");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <Button onClick={this.handleClick} />
        <br />
        <Button onClick={this.handleClick}>Enviar</Button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
