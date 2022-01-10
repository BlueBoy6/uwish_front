import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputText from 'ui/components/form/InputText';
import Card from 'ui/components/layout/Card';
import { useSelector } from 'react-redux';
import { wishesType } from 'types/wishlist';

export default function Wish({ wish }: { wish: wishesType }) {
  const dispatch = useDispatch();
  const [nameWish, setNameWish] = useState<string>(wish.name);
  const [urlWish, setUrlWish] = useState<string>(wish.url);

  useEffect(() => {
    dispatch({
      type: 'wishlist/change-url-wish',
      payload: { id: wish.id, name: nameWish, url: urlWish },
    });
  }, [dispatch, urlWish, nameWish]);

  const deleteWish = (wishId: number) => {
    dispatch({ type: 'saga/wishlist/delete-wish', payload: wishId });
  };

  const saveWish = () =>
    dispatch({
      type: 'saga/wishlist/save-wish',
      payload: { id: wish.id, name: nameWish, url: urlWish },
    });

  return (
    <>
      <Card key={wish.id}>
        <div onClick={() => deleteWish(wish.id)}>🗑</div>
        <InputText
          placeholder="Titre de ce souhait"
          value={wish.name}
          onChange={(e) => setNameWish(e.target.value)}
          onBlur={saveWish}
        />
        <InputText
          placeholder="l'url où on peut trouver ce souhait"
          value={wish.url}
          onChange={(e) => setUrlWish(e.target.value)}
          onBlur={saveWish}
        />
      </Card>
    </>
  );
}
