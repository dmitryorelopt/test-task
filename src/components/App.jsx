import React from "react";
import { connect } from "react-redux";
import { getAllData } from "../redux/App/AppActions";
import styled from "styled-components";
import Table from "./Table";
import { Header } from "./Header";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 940px;
  margin: auto;
  padding: 20px 10px;
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
