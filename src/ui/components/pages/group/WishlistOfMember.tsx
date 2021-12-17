import { useState } from 'react';
import { wishesType, wishlistType } from 'types/wishlist';
import SubSection from 'ui/components/layout/SubSection';
import ModalOfWishlist from './ModalOfWishlist';

export default function WishlistOfMember({
  wishlist,
}: {
  wishlist: wishlistType;
}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);


  const participants = wishlist.wishes
    ? wishlist.wishes.reduce((acc: number, wish: wishesType) => {
        if (wish.participants !== null) acc += wish.participants.length;
        return acc;
      }, 0)
    : 0;

  const openList = () => {
    setModalOpen(true);
  };
  const closeListModal = () => {
    setModalOpen(false);
  };

  if (wishlist.caller) {
    return (
      <SubSection onClick={openList}>
        {wishlist.caller && (
          <>
            <p>{wishlist.caller.username}</p>
            <h4>{wishlist.name}</h4>
            <p>{wishlist.wishes.length} souhait(s)</p>
            <p>{participants} participants</p>
            {isModalOpen && (
              <ModalOfWishlist
                onClickout={closeListModal}
                wishlist={wishlist}
              />
            )}
          </>
        )}
      </SubSection>
    );
  } else {
    return <SubSection>ça charge petit chenapan..</SubSection>;
  }
}
