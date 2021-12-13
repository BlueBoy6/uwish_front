import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InputText from 'ui/components/form/InputText';
import Field from 'ui/components/form/Field';
import Footer from 'ui/components/pages/login/footer';
import Section from 'ui/components/layout/Section';
import Page from 'ui/components/layout/Page';
import Button from 'ui/components/form/Button';
import styled from 'styled-components';

export function Login() {
  const [pseudo, setPseudo] = useState<string>('David');
  const [password, setPassword] = useState<string>('David*');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventPseudo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPseudo(e.target.value);
  };
  const changeEventPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value);
  };
  const tryAuth = () =>
    dispatch({
      type: 'user/async-authenticate',
      payload: { identifier: pseudo, password },
    });
  const user = useSelector((state: any) => state?.user) as any;
  useEffect(() => {
    console.log('user : ', user);
    if (user && user?.user?.jwt !== undefined) navigate('/dashboard');
  }, [user, navigate]);

  return (
    <Page verticalAlign="start">
      <Section title="Login">
        <Field>
          <InputText
            label="pseudo"
            value={pseudo}
            onChange={changeEventPseudo}
          />
        </Field>
        <Field>
          <InputText
            label="password"
            value={password}
            onChange={changeEventPassword}
            onSubmit={tryAuth}
          />
        </Field>
        <ButtonWithMargin onClick={tryAuth}>Zéé parti</ButtonWithMargin>
      </Section>
      <Footer />
    </Page>
  );
}

const ButtonWithMargin = styled(Button)`
  margin-top: 20px;
`;
