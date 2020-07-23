import React from "react";
import styled from 'styled-components';
import { TableFilters } from './TableFilters';

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Title = styled.span`
  font-size: 28px;
  letter-spacing: 0.16px;
  text-transform: uppercase;
`;

export const Header = ({ }) => {
  return <Container>
    <Title>STANDINGS</Title>
    <TableFilters />
  </Container>;
}