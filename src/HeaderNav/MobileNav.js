import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  AiOutlineCloud,
  AiOutlineHome,
  AiOutlineTrophy,
  AiOutlineDatabase,
  AiOutlineCalendar,
} from "react-icons/ai";
import { MdHighlightOff } from "react-icons/md";

const MobileNav = ({ onToggle, toggle }) => {
  return (
    <Container>
      <Fade left>
        <Wrapper>
          <Top>
            <Cancel>
              <MdHighlightOff onClick={onToggle} />
            </Cancel>
          </Top>
          <Rest>
            <Logo src="/10.png" />
            <Nav>
              {" "}
              <MyLink to="#">
                <AiOutlineHome />
                <span>Home</span>
              </MyLink>
              <MyLink to="#">
                <AiOutlineDatabase />
                <span>About</span>
              </MyLink>
              <MyLink to="#">
                <AiOutlineCalendar />
                <span>Portfolio</span>
              </MyLink>
              <MyLink to="#">
                <AiOutlineCloud />
                <span>Fish</span>
              </MyLink>
              <MyLink to="#">
                <AiOutlineTrophy />
                <span>Footer</span>
              </MyLink>
            </Nav>
            <Name>Simple</Name>
          </Rest>
        </Wrapper>
      </Fade>
    </Container>
  );
};

export default MobileNav;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 90vh;
  background: white;
  border-radius: 0 0 10px 0;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 30px;
`;

const Rest = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: contain;
`;

const Nav = styled.div`
  width: 100%;
  flex: 0.8;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-family: lobster;
  color: rgba(0, 0, 0, 0.3);
  font-size: 25px;
  /* margin-top: 50px; */
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  transition: 350ms;
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 13px;
  border-radius: 7px;
  :hover {
    /* color: #0995ff; */
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    margin-left: 5px;
  }
`;

const Cancel = styled.div`
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  opacity: 0.5;
`;
