
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LandingPage() {
  return (
    <LandingWrapper>
      <HeroSection>
        <Content>
          <h1>Welcome to HandyHub</h1>
          <p>A Platform for Seamless Service Access in Nigeria.</p>
          <Link to="/services">
            <ActionButton>Find a Service Provider</ActionButton>
          </Link>
        </Content>
      </HeroSection>

      <LoginSection>
        <h2>Login to Your Dashboard</h2>
        <ButtonContainer>
          <Link to="/dashboard">
            <LoginButton>User Dashboard</LoginButton>
          </Link>
          <Link to="/provider-dashboard">
            <LoginButton>Provider Dashboard</LoginButton>
          </Link>
          <Link to="/admin-dashboard">
            <LoginButton>Admin Dashboard</LoginButton>
          </Link>
        </ButtonContainer>
      </LoginSection>
    </LandingWrapper>
  );
}

export default LandingPage;

// Styled Components
const LandingWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1920px;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4e4e4;
  height: 80vh;
  text-align: center;
  
`;

const Content = styled.div`
  max-width: 800px;
  h1 {
    font-size: 48px;
    color: #333;
  }
  p {
    font-size: 20px;
    margin: 20px 0;
  }
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background-color: #f0a500;
  color: #fff;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c08500;
  }
`;

const LoginSection = styled.section`
  background-color: #f4f4f4;
  padding: 40px 20px;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;
