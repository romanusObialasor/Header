import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineCloud,
  AiOutlineHome,
  AiOutlineTrophy,
  AiOutlineDatabase,
  AiOutlineCalendar,
  AiOutlineMenu,
} from "react-icons/ai";
import MobileNav from "./MobileNav";

const LapView = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <MyLink to="#">
            <Logo src="/10.png" />
          </MyLink>
          <Nav>
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
          <Rest>
            <Login>Login</Login>
            <SignUp>Sign up</SignUp>
          </Rest>
          {/* Burger menu will display none at laptop view */}
          <Menu>
            <AiOutlineMenu onClick={onToggle} />
          </Menu>
        </Wrapper>
      </Container>
      {toggle ? <MobileNav onToggle={onToggle} toggle={toggle} /> : null}
    </>
  );
};

export default LapView;

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background: white;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    justify-content: space-around;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 85%;
  cursor: pointer;
  object-fit: contain;
`;

const Nav = styled.div`
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Rest = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  margin-right: 80px;
  color: black;
  font-size: 16px;
  transition: 350ms;
  display: flex;
  align-items: center;
  :hover {
    color: #0995ff;
  }
  span {
    margin-left: 5px;
  }
`;

const Login = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: 17px;
  transition: 350ms;
  :hover {
    color: #0995ff;
  }
`;

const SignUp = styled(Link)`
  background: #0995ff;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: 350ms;
  border: 1px solid #0995ff;

  :hover {
    background: transparent;
    color: #0995ff;
  }
`;

const Menu = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }

  font-size: 30px;
  cursor: pointer;
  color: #212429;
`;
