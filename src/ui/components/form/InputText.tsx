import React from 'react';
import styled from 'styled-components';
import Field from 'ui/components/form/Field';

export default function inputText({
  value,
  onChange,
  placeholder,
  label,
  onSubmit,
  onBlur,
}: {
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: Function;
  placeholder?: string;
  label?: string;
  onSubmit?: () => void;
}) {
  const keyPress = (e: any) => {
    if (e.key === 'Enter' && onSubmit) onSubmit();
  };

  const getBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    onBlur && onBlur(e);

  return (
    <Field>
      <Label>{label}</Label>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={keyPress}
        onBlur={getBlur}
      />
    </Field>
  );
}

const Label = styled.label`
  font-size: 0.7rem;
`;

const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  border: 1px solid #cecece;
  background: #efefef;
  padding: 10px 12px;
  border-radius: 10px;
  margin-top: 5px;
  :hover {
    border: 1px solid #227c9d;
  }
  :focus-within,
  :focus {
    outline: none;
    border: 1px solid #227c9d;
    box-shadow: 0px 0px 3px 0px #227c9d;
  }
`;
