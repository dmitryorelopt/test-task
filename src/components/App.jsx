import React from "react";
import { connect } from "react-redux";
import { getAllData } from "../redux/App/AppActions";
import styled from "styled-components";
import Table from "./Table";
import { Header } from "./Header";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const App = ({ getAllData }) => {
  getAllData();
  return (
    <Container>
      <Header />
      <Table />
    </Container>
  );
};

export default connect(null, {
  getAllData
})(App);
