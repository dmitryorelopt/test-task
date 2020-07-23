import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

export const TableFilters = ({}) => {
  return (
    <Container>
      <Filter field={"team"} />
      <Filter field={"seria"} />
      <Filter field={"year"} />
    </Container>
  );
};
