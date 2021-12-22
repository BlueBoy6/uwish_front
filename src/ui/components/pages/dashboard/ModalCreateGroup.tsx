import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'ui/components/form/Button';
import InputSelect from 'ui/components/form/InputSelect';
import InputText from 'ui/components/form/InputText';
import Modal from 'ui/components/layout/Modal';
import Section from 'ui/components/layout/Section';

export default function ModalCreateGroup({
  onClickout,
}: {
  onClickout: Function;
}) {
//   const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user.id);
  const [nameGroup, setNameGroup] = useState<string>('');
  const controlSetNameGroup = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNameGroup(e.target.value);
  const submitForm = (): void => {
    console.log('user :', user)
    // dispatch({
    //   type: 'group/async-create-group',
    //   payload: { name: nameGroup, owner: user.id },
    // });
    console.log('submit', nameGroup);
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
          <InputSelect options={['0', '1', '2']} />
          <Button onClick={submitForm}>Zéé parti !</Button>
        </Section>
      </Modal>
    </div>
  );
}
