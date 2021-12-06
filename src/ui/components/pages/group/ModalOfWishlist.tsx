import { useState } from 'react';
import styled from 'styled-components';
import { wishlistType } from 'types/wishlist';
import Modal from 'ui/components/layout/Modal';
import Wish from './Wish';

export default function ModalOfWishlist({
  wishlist,
  onClickout,
}: {
  wishlist: wishlistType;
  onClickout: Function;
}) {


  return (
    <Modal title={wishlist.name} onClickout={onClickout}>
      {wishlist.Wishes.map((wish) => (
        <Wish key={wish.id} wish={wish} />
      ))}
    </Modal>
  );
}


