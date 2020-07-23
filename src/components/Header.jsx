import React from "react";
import styled from "styled-components";
import { TableFilters } from "./TableFilters";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  @media (max-width: 710px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    align-items: stretch;
  }
`;

const Title = styled.span`
  text-align: center;
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
