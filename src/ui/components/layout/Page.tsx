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

const PageStyle = styled.div<PageStyleProps>`
  background: #f2f2f2;
  min-height: 100vh;
  max-width: 100vw;
  padding: 20px;
  display: grid;
  align-content: ${(props) => props.verticalAlign || 'start'};
`;
