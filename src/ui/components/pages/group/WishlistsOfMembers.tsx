import styled from 'styled-components';
import { wishlistType } from 'types/wishlist';

import WishlistOfMember from './WishlistOfMember';

export default function WishlistsOfMembers({
  wishlists,
}: {
  wishlists: wishlistType[];
}) {
  console.log(wishlists);

  return (
    <div>
      <TitleStyle>Les listes disponnibles des membres</TitleStyle>
      <WishlistsStyle>
        {wishlists &&
          wishlists.map((wishlist: wishlistType) => (
            <WishlistOfMember key={wishlist.id} wishlist={wishlist} />
          ))}
      </WishlistsStyle>
    </div>
  );
}

const WishlistsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px 10px;
`;


const TitleStyle = styled.h3`
  margin: 40px 0 20px 0;
`;