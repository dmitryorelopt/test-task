import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const Container = styled.div`
  display: flex;
  gap: 20px;
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
