import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";

class App extends React.Component {
  render() {
    return (<><p>Hello WORLD</p><div>Hello {this.props.name}</div></>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);