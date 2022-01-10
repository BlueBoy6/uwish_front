import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from 'ui/components/layout/Card';
import InputText from 'ui/components/form/InputText';
import Button from 'ui/components/form/Button';
import styled from 'styled-components';

export default function NewWishes() {
  let { id } = useParams<'id'>();
  const dispatch = useDispatch();

  const [newWishlist, setNewWishlist] = useState<null | {
    name: string;
    url: string;
  }>(null);

  const addWish = () => {
    setNewWishlist({ name: '', url: '' });
  };

  const saveWish = (e: any) => {
    if (newWishlist?.name !== '') {
      dispatch({
        type: 'saga/wishlist/post-wish',
        payload: { ...newWishlist, wishlist: { id } },
      });
      setNewWishlist(null);
    }
  };

  return (
    <>
      {newWishlist !== null && (
        <Card>
          <InputText
            value={newWishlist.name}
            onChange={(e) =>
              setNewWishlist({ ...newWishlist, name: e.target.value })
            }
            onBlur={saveWish}
            placeholder="Titre de ce souhait"
          />
          <InputText
            value={newWishlist.url}
            onChange={(e) =>
              setNewWishlist({ ...newWishlist, url: e.target.value })
            }
            onBlur={saveWish}
            placeholder="l'url où on peut trouver ce souhait"
          />
        </Card>
      )}
      <ButtonAddStyled onClick={addWish}>➕ Ajoute un super souhait</ButtonAddStyled>
    </>
  );
}

const ButtonAddStyled = styled(Button)`
  min-height: 120px;
  font-size: 20px;
  font-weight: 600;
`
