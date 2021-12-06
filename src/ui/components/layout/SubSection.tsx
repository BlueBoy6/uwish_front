import React , { MouseEvent } from 'react';
import styled from 'styled-components';

export default function SubSection({
  children,
  title,
  onClick,
}: {
  children: JSX.Element | JSX.Element[];
  title?: String;
  onClick?: Function;
  }) {
  
  const emitClick = (e: MouseEvent) => onClick && onClick(e)
  
  return <SubSectionStyle onClick={emitClick}>{children}</SubSectionStyle>;
}

const SubSectionStyle = styled.div`
  padding: 5px;
  border-radius: 5px;
  background: #f0f0f0;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.05);
  border-top: 4px solid #3fff54;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.1);
`;
