
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ServiceProvidersPage() {
  const { serviceId } = useParams();

  const providers = [
    { id: 1, name: 'Ademola', rating: 4.5, reviews: 120, location: 'Lagos' },
    { id: 2, name: 'Mayor', rating: 4.7, reviews: 80, location: 'Lagos' },
    { id: 3, name: 'Standley', rating: 4.8, reviews: 90, location: 'Abuja' },
  ];

  return (
    <ProvidersWrapper>
      <h2>I'm available, Let's talk <br /> {serviceId.charAt(0).toUpperCase() + serviceId.slice(1)} Providers</h2>
      <ProviderList>
        {providers.map((provider) => (
          <ProviderCard key={provider.id}>
            <h3>{provider.name}</h3>
            <p>Rating: {provider.rating} ★</p>
            <p>{provider.reviews} Reviews</p>
            <p>Location: {provider.location}</p>
          </ProviderCard>
        ))}
      </ProviderList>
    </ProvidersWrapper>
  );
}

export default ServiceProvidersPage;

const ProvidersWrapper = styled.div`
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  max-width: 1920px;
`;

const ProviderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  
`;

const ProviderCard = styled.div`
  padding: 15px;
  background-color: #fff8f0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 5px;
  }
  p {
    margin: 5px 0;
  }
`;
