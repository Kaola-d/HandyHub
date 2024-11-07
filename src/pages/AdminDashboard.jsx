import React from 'react';
import styled from 'styled-components';

function AdminDashboard() {
  return (
    <DashboardWrapper>
      <h2>Admin Dashboard</h2>
      <Section>
        <h3>Manage Providers</h3>
        <p>View, approve, or deactivate provider accounts.</p>
      </Section>
      <Section>
        <h3>Manage Services</h3>
        <p>Review and manage services offered on the platform.</p>
      </Section>
      <Section>
        <h3>Manage Reviews</h3>
        <p>Moderate user reviews for compliance and quality.</p>
      </Section>
    </DashboardWrapper>
  );
}

export default AdminDashboard;

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
