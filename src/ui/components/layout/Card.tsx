import React from 'react';
import styled from 'styled-components';

export default function Card({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
  className?: String;
}) {
  return <CardStyle>{children}</CardStyle>;
}

const CardStyle = styled.div`
  user-select: none;
  display: grid;
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  place-items: center;
  text-align: center;
  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #b3b3b3;
  }
`;
