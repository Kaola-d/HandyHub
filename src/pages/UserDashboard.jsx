import React from 'react';
import styled from 'styled-components';

function UserDashboard() {
  return (
    <DashboardWrapper>
      <h2>Kaolad Dashboard </h2>
      <Section>
        <h3>Upcoming Bookings</h3>
        {/* Booking cards */}
      </Section>
      <Section>
        <h3>Past Bookings</h3>
        {/* Booking history cards */}
      </Section>
      <Section>
        <h3>Profile Settings</h3>
        {/* Profile setting links */}
      </Section>
    </DashboardWrapper>
  );
}

export default UserDashboard;

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
