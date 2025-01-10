import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  background: rgba(20, 20, 25, 0.9);
  border: 1px solid #333;
  border-radius: 4px;
  padding: 1rem;
  min-height: 200px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 0.875rem;
  color: #888;
`;

const CardStatus = styled.span<{ status?: 'loading' | 'running' | 'error' }>`
  color: ${props => {
    switch (props.status) {
      case 'loading': return '#4a9eff';
      case 'running': return '#ffa94a';
      case 'error': return '#ff4a4a';
      default: return '#888';
    }
  }};
`;

interface DashboardCardProps {
  title: string;
  status?: 'loading' | 'running' | 'error';
  children: React.ReactNode;
}

export default function DashboardCard({ title, status, children }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {status && <CardStatus status={status}>{status}</CardStatus>}
      </CardHeader>
      {children}
    </Card>
  );
} 