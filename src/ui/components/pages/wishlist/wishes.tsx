import { useEffect } from 'react';
import InputText from 'ui/components/form/InputText';
import Card from 'ui/components/layout/Card';
import { useSelector } from 'react-redux';
import { wishesType } from 'types/wishlist';

export default function Wishes() {
  const wishes = useSelector((state: any) => state.wishlist.wishes);

  const catchChange = (evt: any) => {
    console.log('evt : ', evt);
  };
  useEffect(() => {
    console.log('fake fake fake : ', wishes);
  }, [wishes]);

  return (
    <>
      {wishes.map((wish: wishesType) => (
        <Card key={wish.id}>
          <div>🗑</div>
          <InputText
            placeholder="Titre de ce souhait"
            value={wish.name}
            onChange={catchChange}
          />
          <InputText
            placeholder="l'url où on peut trouver ce souhait"
            value={wish.url}
            onChange={catchChange}
          />
        </Card>
      ))}
    </>
  );
}
