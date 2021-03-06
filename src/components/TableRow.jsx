import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { rowFocus } from "../redux/App/AppActions";

const Container = styled("div")`
  position: relative;
  display: flex;
  border-radius: 9px;
  background-color: ${props => (props.focused ? "#84754e" : "#ffffff")};
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 0 30px;
  overflow: hidden;

  &:hover {
    background-color: rgba(132, 117, 78, 0.7);
    cursor: pointer;
  }

  &:active {
    background-color: rgba(132, 117, 78, 0.9);
  }

  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  &:before {
    content: " ";
    position: absolute;
    display: block;
    width: 5px;
    height: 100%;
    background-color: ${props => props.marker};
    left: 0;
    top: 0;
  }
`;

const UID = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
`;

const Position = styled.span`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.47px;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 30px;
`;

const Data = styled.div`
  display: flex;
  width: 90px;
  justify-content: center;
  align-items: center;
  font-weight: ${props => (props.primary ? "bold" : "normal")};
  font-size: 12px;
  letter-spacing: 0.35px;
  ${props =>
    props.hide &&
    `
    @media(max-width: ${props.hide}px) {
      display: none;
    }
  `}
`;

const Name = styled(Data)`
  font-weight: bold;
  justify-content: flex-start;
`;

const TableRow = ({
  position,
  name,
  attributes,
  logoUri,
  uid,
  rowFocus,
  title,
  marker,
  focused
}) => {
  if (title) {
    return (
      <Container disabled>
        <UID>Position</UID>
        <Data>Pts.</Data>
        <Data>P.</Data>
        <Data hide={420}>W.</Data>
        <Data hide={460}>D.</Data>
        <Data hide={520}>L.</Data>
        <Data hide={580}>GF.</Data>
        <Data hide={610}>GA.</Data>
        <Data hide={700}>GD.</Data>
      </Container>
    );
  }

  const onClick = useCallback(() => {
    rowFocus(uid);
  }, []);
  return (
    <Container onClick={onClick} marker={marker} focused={focused}>
      <UID>
        <Position>{position}</Position>
        <Logo src={logoUri} alt="" />
        <Name>{name}</Name>
      </UID>
      <Data primary>{attributes.AwayAgainst}</Data>
      <Data>{attributes.Points}</Data>
      <Data hide={420}>{attributes.Drawn}</Data>
      <Data hide={460}>{attributes.HomeAgainst}</Data>
      <Data hide={520}>{attributes.HomePlayed}</Data>
      <Data hide={580}>{attributes.HomePosition}</Data>
      <Data hide={610}>{attributes.AwayPoints}</Data>
      <Data hide={700}>{attributes.AwayWon}</Data>
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
        : "white",
    focused: props.uid === state.app.rowFocused
  }),
  {
    rowFocus
  }
)(TableRow);
