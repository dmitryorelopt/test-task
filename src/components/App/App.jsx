import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "../../redux/Store";

export class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    return <Provider store={store}>test</Provider>;
  }
}
