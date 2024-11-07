import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function CategoryPage() {
  const { categoryId } = useParams();

  return (
    <CategoryWrapper>
      <h2>Service Providers for {categoryId}</h2>
      <ProviderLinks>
        <Link to="/provider/1">Kaolad</Link>
        <Link to="/provider/2">Dee_Ola</Link>
        <Link to="/provider/3">Full_Stack</Link>
      </ProviderLinks>
    </CategoryWrapper>
  );
}

export default CategoryPage;

const CategoryWrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1920px;
`;

const ProviderLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
 
`;
