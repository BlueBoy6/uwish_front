import { useState } from 'react';
import { wishesType, wishlistType } from 'types/wishlist';
import styled from 'styled-components';

export default function Wish({ wish }: { wish: wishesType }) {
  const [isOwnerShowed, setIsOwnerShowed] = useState<Boolean>(false);
  return (
    <WishStyled
      className={isOwnerShowed ? 'is-showed' : ''}
      onClick={() => setIsOwnerShowed(!isOwnerShowed)}
    >
      <p>{wish.name}</p>
      {isOwnerShowed && (
        <p>
          {wish.owner.map((owner) => (
            <Owner>💝 {owner.username}</Owner>
          ))}
        </p>
      )}
    </WishStyled>
  );
}

const WishStyled = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: #f0f0f0;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  transition: 0.15s ease;
  &:hover,
  &.is-showed {
    transition: 0.15s ease;
    background: #dfdfdf;
  }
`;

const Owner = styled.div`
  display: inline-grid;
  border-radius: 5px;
  background: #f0f0f0;
  border-left: 4px solid #3fff54;
  padding: 3px 5px;
  margin:3px 3px 0 0;
`;
