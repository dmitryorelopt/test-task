import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeFilter } from "../redux/App/AppActions";

const Container = styled.select``;

const Filter = ({ changeFilter, field, values }) => {
  const onChange = useCallback(event => {
    changeFilter(field, event.target.value);
  }, []);
  return (
    <Container onChange={onChange}>
      {values.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Container>
  );
};

export default connect(
  (state, props) => {
    const mockData = {
      team: "First Team",
      seria: "Serie A",
      year: "2018/19"
    };

    return {
      values: [mockData[props.field], "ANOTHER"]
    };
  },
  {
    changeFilter
  }
)(Filter);
