import React from "react";
import { connect } from "react-redux";
import { getAllData } from '../redux/App/AppActions';

const App = ({ getAllData }) => {
  getAllData();
  return <div>test</div>;
}

export default connect(state => ({}), {
  getAllData
})(App);