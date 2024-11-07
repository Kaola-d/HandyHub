import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const initialServices = [
  { id: 1, name: 'Plumbing', type: 'Home Services', location: 'Lagos' },
  { id: 2, name: 'Electrician', type: 'Home Services', location: 'Abuja' },
  { id: 3, name: 'Carpentry', type: 'Crafts', location: 'Ibadan' },
  { id: 4, name: 'Gardening', type: 'Outdoor Services', location: 'Port Harcourt' },
  { id: 5, name: 'Moving Service', type: 'Transport', location: 'Lagos' },
  { id: 6, name: 'Cleaning', type: 'Home Services', location: 'Enugu' },
];

function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const navigate = useNavigate();

  const filteredServices = initialServices.filter(service => {
    return (
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType ? service.type === filterType : true) &&
      (filterLocation ? service.location === filterLocation : true)
    );
  });

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <PageWrapper>
      <h1>Our Services</h1>
      <Filters>
        <input
          type="text"
          placeholder="Search for services..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Select onChange={e => setFilterType(e.target.value)} value={filterType}>
          <option value="">All Types</option>
          <option value="Home Services">Home Services</option>
          <option value="Crafts">Crafts</option>
          <option value="Outdoor Services">Outdoor Services</option>
          <option value="Transport">Transport</option>
        </Select>
        <Select onChange={e => setFilterLocation(e.target.value)} value={filterLocation}>
          <option value="">All Locations</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Ibadan">Ibadan</option>
          <option value="Port Harcourt">Port Harcourt</option>
          <option value="Enugu">Enugu</option>
        </Select>
      </Filters>
      <ServiceList>
        {filteredServices.map(service => (
          <ServiceCard key={service.id} onClick={() => handleServiceClick(service.id)}>
            <h3>{service.name}</h3>
            <p>Type: {service.type}</p>
            <p>Location: {service.location}</p>
          </ServiceCard>
        ))}
      </ServiceList>
    </PageWrapper>
  );
}

export default ServicesPage;

const PageWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Filters = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    width: 250px;
  }

  @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin: 0 auto;
  max-width: 1920px;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  
`;

const ServiceCard = styled.div`
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: left;

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

