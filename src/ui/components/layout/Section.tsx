import React from 'react';
import styled from 'styled-components';

export default function Section({
  children,
  title,
  className,
}: {
  children: JSX.Element | JSX.Element[] | string;
  title?: String;
  className?: String;
}) {
  return (
    <SectionStyle>
      {title && <SectionTitleStyle>{title}</SectionTitleStyle>}
      {children}
    </SectionStyle>
  );
}

const SectionStyle = styled.section`
  position: relative;
  background: rgba(255, 255, 255, 0.75);
  background: rgba(0,0,0, 0.75);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.02);
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
const SectionTitleStyle = styled.h2`
  margin: 0;
  padding-bottom: 5px;
  position: relative;
  &:before {
    content: '';
    width: 40px;
    height: 4px;
    position: absolute;
    bottom: -4px;
    background: #3fff54;
  }
`;
