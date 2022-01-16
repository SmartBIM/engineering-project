import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
    const FooterWrap = styled.footer`
    height: 100px;
    background-color: #9d9dab;
    clear: both;
    position: relative;
    margin-top: -20px;
    `;

    const StyledNavLink = styled(NavLink)`
    list-style: none;
  font-family: arial;
  font-size: 25px;
  padding: 20px 30px;
  text-decoration: none;
  color: black;
  cursor: pointer;
    `;
    const Nav = styled.nav`
    height: 40px;
  padding: 20px 30px;

    `;
    return <FooterWrap>
          <Nav>
      <StyledNavLink exact to="/">
         Terms and Conditions
      </StyledNavLink>
      <StyledNavLink to="/">
          Privacy Policy
      </StyledNavLink>
      <StyledNavLink to="/">
          About us
      </StyledNavLink>
    </Nav>
    </FooterWrap>
}