import React from 'react';
import styled from 'styled-components';

export default function Page({
  children,
  verticalAlign,
}: {
  children: JSX.Element | JSX.Element[];
  verticalAlign?: string;
}) {
  return <PageStyle verticalAlign={verticalAlign}>{children}</PageStyle>;
}
type PageStyleProps = {
  verticalAlign?: string;
};

// background: #f2f2f2;
const PageStyle = styled.div<PageStyleProps>`
  background: #2f2f2f;
  min-height: calc(100vh - 40px);
  min-width: calc(100vw - 40px);
  padding: 20px;
  display: grid;
  align-content: ${(props) => props.verticalAlign || 'start'};
`;
