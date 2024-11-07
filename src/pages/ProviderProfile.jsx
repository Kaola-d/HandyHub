import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

function ProviderProfile() {
  const { providerId } = useParams();

  return (
    <ProfileWrapper>
      <BackButton />
      <h2>Kaolad - {providerId}</h2>
      <Bio>
        <p><strong>Bio:</strong> Experienced professional offering top-notch services.</p>
        <p><strong>Services:</strong> Data Analyst, Electrical Repairs, Software Dev</p>
        <p><strong>Location:</strong> Lagos, Nigeria</p>
      </Bio>
      <ContactButton>Contact Provider</ContactButton>
    </ProfileWrapper>
  );
}

export default ProviderProfile;

const ProfileWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1920px;
`;

const Bio = styled.div`
  margin-top: 10px;
  line-height: 1.6;
  
`;

const ContactButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f0a500;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
