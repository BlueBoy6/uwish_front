import React, { MouseEvent } from 'react';
import styled from 'styled-components';

export default function Button({
  children,
  onClick,
  className
}: {
  children: JSX.Element | JSX.Element[] | string;
    onClick?: Function;
    className?: string
}) {
  const emitOnClick = (e: MouseEvent) => onClick && onClick(e);
  return <ButtonStyled className={className ? className : ''} onClick={emitOnClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  border-radius: 8px;
  background: #f0f0f0;
  border: 3px solid #3fff54;
  color: #2f2f2f;
  cursor: pointer;
  padding: 8px 20px;
  &:hover{
      transition: 0.1s;
      background: #3fff54;
  }
`;
