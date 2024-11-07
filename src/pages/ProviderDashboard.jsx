import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProviderDashboard() {
  return (
    <DashboardWrapper>
      <h2>Provider Dashboard (This is the provider dashboard)</h2>
      <Section>
        <h3>Service Calendar</h3>
        {/* Calendar Component */}
      </Section>
      <Section>
        <h3>Earnings Overview</h3>
        {/* Earnings summary */}
      </Section>
      <Section>
        <h3>Manage Services</h3>
        {/* Service management options */}
      </Section>
      <Section>
        <h3>Provider Profile</h3>
        <p>View and edit your profile details.</p>
        <Link to="/provider/1">
          <Button>Go to Profile</Button>
        </Link>
      </Section>
      <Section>
        <h3>Work Reviews</h3>
        <Review>
          <p><strong>Review 1:</strong> Excellent service, very professional!</p>
        </Review>
        <Review>
          <p><strong>Review 2:</strong> Quick and efficient work.</p>
        </Review>
      </Section>
    </DashboardWrapper>
  );
}

export default ProviderDashboard;

const DashboardWrapper = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  margin: 0 auto;
  max-width: 1920px;
`;

const Section = styled.div`
  margin-bottom: 20px;
 

  h3 {
    margin-bottom: 10px;
    font-size: 22px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f0a500;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Review = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
