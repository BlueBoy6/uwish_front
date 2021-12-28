import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from 'ui/components/form/Button';
import InputText from 'ui/components/form/InputText';
import Modal from 'ui/components/layout/Modal';
import Section from 'ui/components/layout/Section';

export default function ModalCreateWishlist({
  onClickout,
}: {
  onClickout: Function;
}) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user.id);
  const [nameWishlist, setNameWishlist] = useState<string>('');

  const controlSetNameWishlist = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => setNameWishlist(e.target.value);

  const submitForm = (): void => {
    dispatch({
      type: 'saga/wishlist/create-wishlist',
      payload: {
        name: nameWishlist,
        caller: { id: user },
      },
    });

    onClickout();
  };

  return (
    <div>
      <Modal onClickout={onClickout}>
        <Section title="Créez une nouvelle super liste de souhait">
          <InputText
            placeholder="Le petit nom de la liste"
            onChange={controlSetNameWishlist}
            value={nameWishlist}
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
