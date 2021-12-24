import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { groupType } from 'types/group';
import { wishesType } from 'types/wishlist';
import InputSelect from 'ui/components/form/InputSelect';
import InputText from 'ui/components/form/InputText';
import Card from 'ui/components/layout/Card';
import Section from 'ui/components/layout/Section';

export default function Wishlist() {
  let { id } = useParams<'id'>();
  const wishlist = useSelector((state: any) => state.wishlist);
  const user = useSelector((state: any) => state.user.user);
  const groups = useSelector((state: any) =>
    state.user.groups.map((group: groupType) => group.name),
  );

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const a = ['a', 'b', 'c'];

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'wishlist/async-fetch-datas', payload: { id } });
      setLoaded(true);
    }
    console.log('wishlist : ', wishlist);
  }, [wishlist, dispatch, id, loaded]);
  const isUserAdmin = user?.id === wishlist?.caller?.id;

  if (wishlist && wishlist.caller) {
    return (
      <Section>
        <h1>{wishlist.name}</h1>
        <p>La liste est public : {wishlist.isPublic ? 'Oui' : 'Non'}</p>
        {isUserAdmin ? (
          <p>Vous êtes admin</p>
        ) : (
          <p>{wishlist.caller.username}</p>
        )}
        <div>
          <InputSelect value={wishlist?.group?.name} options={groups} />
          Vos souhaits
          <CardsList>
            {wishlist.wishes.map((wish: wishesType) => (
              <Card key={wish.id}>
                <InputText value={wish.name} />
                <InputText placeholder="l'url où on peut trouver ce souhait" value={wish.url} />
              </Card>
            ))}
          </CardsList>
        </div>
      </Section>
    );
  } else {
    return (
      <Section>
        <p>2 minouche ça charge..</p>
      </Section>
    );
  }
}

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;
