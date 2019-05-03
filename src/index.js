import React from "react";
import { render } from "react-dom";

class Button extends React.Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <Button />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
