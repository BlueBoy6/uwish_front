import { useState } from 'react';
import { wishesType, wishlistType } from 'types/wishlist';
import SubSection from 'ui/components/layout/SubSection';
import { useSelector } from 'react-redux';
import ModalOfWishlist from './ModalOfWishlist';

export default function WishlistOfMember({
  wishlist,
}: {
  wishlist: wishlistType;
}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const members = useSelector((state: any) => state?.group.users) as any;
  const wishlistOwner = members.find(
    (member: any) => member.id === wishlist.user,
  );
  const participants = wishlist.Wishes.reduce(
    (counter: number, wish: wishesType): number => {
      if (wish.owner.length > 0) counter += 1;
      return counter;
    },
    0,
  );

  const openList = () => {
    console.log('putain');
    setModalOpen(true);
  };
  const closeListModal = () => {
    console.log('isModalOpen : ', isModalOpen);
    setModalOpen(false);
  };

  return (
    <SubSection onClick={openList}>
      <>
        <p>{wishlistOwner.username}</p>
        <h4>{wishlist.name}</h4>
        <p>{wishlist.Wishes.length} souhait(s)</p>
        <p>{participants} participants</p>
        {isModalOpen && (
          <ModalOfWishlist onClickout={closeListModal} wishlist={wishlist} />
        )}
      </>
    </SubSection>
  );
}
