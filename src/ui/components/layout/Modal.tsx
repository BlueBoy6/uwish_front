import { MouseEvent } from 'react';
import styled from 'styled-components';

export default function Modal({
  children,
  title,
  onClick,
  onClickout,
}: {
  children: JSX.Element | JSX.Element[];
  title?: String;
  onClick?: Function;
  onClickout?: Function;
}) {
  const emitClick = (e: MouseEvent) => {
    onClick && onClick(e);
    e.stopPropagation();
    //   e.cancelBubble = true;
  };
  const emitClickOut = (e: MouseEvent) => {
    onClickout && onClickout(e);
    e.stopPropagation();
  };

  return (
    <LayoutFixed onClick={emitClickOut}>
      <SubSectionStyle onClick={emitClick}>
        {title && <h4>{title}</h4>}
        {children}
      </SubSectionStyle>
    </LayoutFixed>
  );
}

const SubSectionStyle = styled.div`
  position: relative;
  z-index: 4;
  border-radius: 5px;
  padding: 15px;
  background: #f0f0f0;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
`;

const LayoutFixed = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
