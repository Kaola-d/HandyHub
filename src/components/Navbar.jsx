
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import handyhubLogo from '../assets/png/handyhub.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <LogoContainer>
        <NavLink to="/">
          <img src={handyhubLogo} alt="HandyHub Logo" />
        </NavLink>
        <h1>HandyHub</h1>
      </LogoContainer>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <StyledNavLink to="/" onClick={() => setIsOpen(false)}>Home</StyledNavLink>
        <StyledNavLink to="/services" onClick={() => setIsOpen(false)}>Services</StyledNavLink>
        <StyledNavLink to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</StyledNavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #210000;
  color: #fff;
  margin: 0 auto;
  max-width: 1920px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 85%;
  align-items: center;
  img {
    width: 50px;
    margin-right: 10px;
  }
  h1 {
    font-size: 24px;
    color: #fff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #210000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    color: #f0a500;
    font-weight: bold;
  }
  &:hover {
    color: #f0a500;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
