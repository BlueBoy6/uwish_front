import React from 'react';
import styled from 'styled-components';

export default function InputSelect({ options, value, onChange }: { options: string[], value?: string, onChange: Function }) {

  const lechangecmaintenant = (val:any) => console.log(val)
  return (
    <div>
      <Select value={value} onChange={lechangecmaintenant}>
        <option value="">Assigné à aucun groupe</option>
        {options && options.map((id: string | number) => <option value={id} key={id}>{id}</option>)}
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
