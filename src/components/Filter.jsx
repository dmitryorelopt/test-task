import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeFilter } from "../redux/App/AppActions";
import { ArrowRight } from "../images/ArrowRight";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Select = styled.select`
  padding: 0 50px 0 15px;
  border: 1px solid rgba(95, 37, 159, 0.2);
  border-radius: 30px;
  outline: none;
  appearance: none;
  font-size: 14px;
  letter-spacing: 0.23px;
`;

const Option = styled.option``;

const Arrow = styled(ArrowRight)`
  position: absolute;
  right: 15px;
  top: calc(50% - 4px);
  color: #5f259f;
  pointer-events: none;
`;

const Filter = ({ changeFilter, field, values }) => {
  const onChange = useCallback(event => {
    changeFilter(field, event.target.value);
  }, []);
  return (
    <Container>
      <Select onChange={onChange}>
        {values.map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
      <Arrow width={13} height={8} />
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
