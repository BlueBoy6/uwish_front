import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { groupType } from 'types/group';
import { wishesType } from 'types/wishlist';

import InputSelect from 'ui/components/form/InputSelect';

import Section from 'ui/components/layout/Section';
import NewWishes from 'ui/components/pages/wishlist/newWishes';
import Wish from 'ui/components/pages/wishlist/wish';

export default function Wishlist() {
  let { id } = useParams<'id'>();
  const dispatch = useDispatch();

  const wishlist = useSelector((state: any) => state?.wishlist);
  const wishes = useSelector((state: any) => state?.wishlist?.wishes);
  const user = useSelector((state: any) => state.user.user);
  const groups = useSelector((state: any) =>
    state.user.groups.map((group: groupType) => group.name),
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'saga/wishlist/fetch-datas', payload: { id } });
      setLoaded(true);
    }
  }, [wishlist, dispatch, id, loaded, wishes]);

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
            {wishes && wishes.map((wish: wishesType) => <Wish key={wish.id} wish={wish} />)}
            <NewWishes />
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
