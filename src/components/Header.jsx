import React from "react";
import styled from "styled-components";
import { TableFilters } from "./TableFilters";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 0.16px;
  text-transform: uppercase;
`;

export const Header = ({}) => {
  return (
    <Container>
      <Title>STANDINGS</Title>
      <TableFilters />
    </Container>
  );
};
