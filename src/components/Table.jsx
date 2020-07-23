import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TableRow from "./TableRow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Table = ({ records }) => {
  return (
    <Container>
      <TableRow title />
      {records.map((record, index) => (
        <TableRow
          key={record.Name}
          uid={record["@attributes"].uID}
          position={index}
          name={record.Name}
        />
      ))}
    </Container>
  );
};

export default connect(state => ({
  records: state.table.records || []
}))(Table);
