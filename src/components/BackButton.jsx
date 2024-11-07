
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      ← Back
    </Button>
  );
}

export default BackButton;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f0a500;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
