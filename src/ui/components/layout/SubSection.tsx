import React from 'react'
import styled from 'styled-components'

export default function SubSection({
    children,
    title,
  }: {
    children: JSX.Element | JSX.Element[];
    title? : String ;
  }) {
    return (
        <SubSectionStyle>
            {children}
        </SubSectionStyle>
    )
}

const SubSectionStyle = styled.section`
padding: 5px;
border-radius: 5px;
background: #f0f0f0;
box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.05);
`