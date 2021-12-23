import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { wishlistType } from 'types/wishlist';
import { useDispatch, useSelector } from 'react-redux';
import WishlistOfMember from './WishlistOfMember';

export default function WishlistsOfMembers({
  wishlists,
}: {
  wishlists: wishlistType[];
}) {
  const [tried, setTried] = useState(false);
  const dispatch = useDispatch();
  const group = useSelector((state: any) => {
    return state?.group;
  }) as any;

  useEffect(() => {
    if (
      !tried &&
      group.wishlists &&
      !group.wishlists.some((wl: wishlistType) => !!wl.caller)
    ) {
      dispatch({
        type: 'group/async-get-wishlists',
        payload: group.id,
      });
      if (group.wishlists !== null || group.wishlists.some((wishlist: wishlistType) => !!wishlist.caller))
        setTried(true);
    }
  }, [dispatch, wishlists, group, tried]);

  return (
    <div>
      <TitleStyle>Les listes disponnibles des membres</TitleStyle>
      <WishlistsStyle>
        {wishlists &&
          wishlists.map((wishlist: wishlistType) => (
            <WishlistOfMember key={wishlist.id} wishlist={wishlist} />
          ))}
      </WishlistsStyle>
      {(wishlists.length === 0 || wishlists === null) && (<div>
      Ce super groupe n'a toujours de liste de souhaits rattaché</div>)}
    </div>
  );
}

const WishlistsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px 10px;
`;

const TitleStyle = styled.h3`
  margin: 40px 0 20px 0;
`;
