import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from 'ui/components/form/Button';
import InputText from 'ui/components/form/InputText';
import Modal from 'ui/components/layout/Modal';
import Section from 'ui/components/layout/Section';

export default function ModalCreateGroup({
  onClickout,
}: {
  onClickout: Function;
}) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user.id);
  const [nameGroup, setNameGroup] = useState<string>('');
  const controlSetNameGroup = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNameGroup(e.target.value);
  const submitForm = (): void => {
    dispatch({
      type: 'saga/group/create-new-group',
      payload: {
        name: nameGroup,
        owner: { id: user },
        members: [{ id: user }],
      },
    });

    onClickout();
  };

  return (
    <div>
      <Modal onClickout={onClickout}>
        <Section title="Créez un nouveau super groupe">
          <InputText
            placeholder="Nom du nouveau super groupe"
            onChange={controlSetNameGroup}
            value={nameGroup}
          />
          <ButtonStyled onClick={submitForm}>Zéé parti !</ButtonStyled>
        </Section>
      </Modal>
    </div>
  );
}

const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;
