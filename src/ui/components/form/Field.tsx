import React from 'react';
import styled from 'styled-components';

export default function Field({ children }: { children: React.ReactNode }) {
  return <FieldInput>{children}</FieldInput>;
}

const FieldInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  &:first-child {
    margin-top: 0px;
  }
`;
