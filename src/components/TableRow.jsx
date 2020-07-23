import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { rowFocus } from "../redux/App/AppActions";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const UID = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Marker = styled.span`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Position = styled.span`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Logo = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const Data = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const TableRow = ({
  position,
  name,
  attributes,
  logoUri,
  uid,
  rowFocus,
  title,
  marker
}) => {
  if (title) {
    return (
      <Container>
        <UID>Position</UID>
        <Data>Pts.</Data>
        <Data>P.</Data>
        <Data>W.</Data>
        <Data>D.</Data>
        <Data>L.</Data>
        <Data>GF.</Data>
        <Data>GA.</Data>
        <Data>GD.</Data>
      </Container>
    );
  }

  const onClick = useCallback(() => {
    rowFocus(uid);
  }, []);
  return (
    <Container onClick={onClick}>
      <UID>
        <Marker marker={marker} />
        <Position>{position}</Position>
        <Logo uri={logoUri} name={name} />
      </UID>
      <Data primary>{attributes.AwayAgainst}</Data>
      <Data>{attributes.Points}</Data>
      <Data>{attributes.Drawn}</Data>
      <Data>{attributes.HomeAgainst}</Data>
      <Data>{attributes.HomePlayed}</Data>
      <Data>{attributes.HomePosition}</Data>
      <Data>{attributes.AwayPoints}</Data>
      <Data>{attributes.AwayWon}</Data>
    </Container>
  );
};

export default connect(
  (state, props) => ({
    attributes:
      !props.title &&
      state.team &&
      (
        state.team.filter(
          record => record["@attributes"].TeamRef === props.uid
        )[0] || {}
      ).Standing,
    logoUri:
      !props.title &&
      `http://images.akamai.opta.net/football/team/badges_150/${props.uid.slice(
        1
      )}.png`,
    marker:
      props.position < 5
        ? "green"
        : props.position === 5
        ? "blue"
        : props.position === 6
        ? "red"
        : "white"
  }),
  {
    rowFocus
  }
)(TableRow);
