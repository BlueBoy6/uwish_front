import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputText from 'ui/components/form/InputText';
import Field from 'ui/components/form/Field';
import Footer from 'ui/components/pages/login/footer';
import Section from 'ui/components/layout/Section';
import Page from 'ui/components/layout/Page';

export function Login() {
  const [pseudo, setPseudo] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

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
      type: 'user/call-authenticate',
      payload: { identifier: pseudo, password },
    });

  return (
    <Page verticalAlign="start">
      <Section>
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
      </Section>
      <Footer />
    </Page>
  );
}
