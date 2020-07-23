import React from "react";
import { connect } from "react-redux";
import { appInitialize } from '../redux/App/AppActions';

const App = ({ appInitialize }) => {
  appInitialize();
  return <div>test</div>;
}

export default connect(state => ({}), {
  appInitialize
})(App);