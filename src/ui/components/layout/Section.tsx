import React from 'react';
import styled from 'styled-components';

export default function Section({ children }: { children: JSX.Element[] }) {
  return <SectionStyle>{children}</SectionStyle>;
}

const SectionStyle = styled.section`
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.02);
`;
