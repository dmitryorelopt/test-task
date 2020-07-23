import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TableRow from "./TableRow";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Table = ({ records }) => {
  return (
    <Container>
      <TableRow title />
      {records.map(record => (
        <TableRow key={record.Name} uid={record["@attributes"].uID} />
      ))}
    </Container>
  );
};

export default connect(state => ({
  records: state.table.records || []
}))(Table);
