import React from 'react';
import styled from 'styled-components';

export default function InputSelect({ options }: { options: string[] }) {
  return (
    <div>
      <Select>
        {options && options.map((id: string | number) => <option>{id}</option>)}
      </Select>
    </div>
  );
}

const Select = styled.select`
  border-radius: 8px;
  background: #f0f0f0;
  border: 3px solid #3fff54;
  color: #2f2f2f;
  cursor: pointer;
  padding: 8px 20px;
  &:hover {
    transition: 0.1s;
    background: #fcfcfc;
  }
`;
