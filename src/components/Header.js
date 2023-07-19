import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/carlogo.png" className="logo-section-image" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg} ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo-section-image {
    width: 15%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
  }

  .logo {
    height: 5rem;
  }
`;
export default Header;
