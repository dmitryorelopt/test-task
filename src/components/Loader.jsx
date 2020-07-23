import React from "react";
import Spinner  from 'react-loader-spinner'
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = ({ loading }) => {
  return loading ? <Container><Spinner
    type="Circles"
    color="#00BFFF"
    height={70}
    width={70}
    timeout={10000}
  /></Container> : null;
};

export default connect(state => ({
  loading: state.app.loading || state.app.errorMessage,
}))(Loader);
