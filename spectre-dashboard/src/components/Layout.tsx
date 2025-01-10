import React from 'react';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  background: #0a0a0f;
  min-height: 100vh;
  color: #e5e5e5;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px dashed #333;
`;

const Logo = styled.div`
  font-size: 0.875rem;
  color: #666;
  text-transform: uppercase;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header>
        <Logo>SPECTRE OS</Logo>
        <span>VERSION ALPHA</span>
      </Header>
      <DashboardGrid>
        {children}
      </DashboardGrid>
    </LayoutContainer>
  );
} 