import React from 'react';
import styled from '@emotion/styled';

const TerminalContainer = styled.div`
  background: #000;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 1rem;
  font-family: monospace;
  color: #00ff00;
  grid-column: 1 / -1;
  min-height: 300px;
`;

const TerminalHeader = styled.div`
  text-transform: uppercase;
  color: #666;
  margin-bottom: 1rem;
`;

const TerminalContent = styled.div`
  white-space: pre-wrap;
`;

export default function Terminal() {
  return (
    <TerminalContainer>
      <TerminalHeader>Terminal</TerminalHeader>
      <TerminalContent>
        {`> SPECTRE OS v1.0.0
> Initializing system...
> Ready for input...`}
      </TerminalContent>
    </TerminalContainer>
  );
} 