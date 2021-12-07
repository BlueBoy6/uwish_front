import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { wishesType, wishlistType } from 'types/wishlist';
import styled from 'styled-components';
import Button from 'ui/components/form/Button';


export default function Wish({ wish, wishlist }: { wish: wishesType, wishlist: wishlistType }) {

  const [isOwnerShowed, setIsOwnerShowed] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };
  const openWish = (e: any) => {
    setIsOwnerShowed(!isOwnerShowed)
    stopPropagation(e)
  }

  const affectYourselfTowish = (e: any) => {
    dispatch({type: 'wishlist/async-put-wishlist', payload: {wish ,wishlist}})
    stopPropagation(e)
  }


  return (
    <WishStyled
      className={isOwnerShowed ? 'is-showed' : ''}
      onClick={openWish}
    >
      <NameWish>
        <LinkStyled onClick={stopPropagation} as="a" rel="noopener" target="_blank" href={wish.url}>🔗</LinkStyled>
        <span>{wish.name} </span>
        {wish.owner.length > 0 &&
          !isOwnerShowed &&
          wish.owner.map((owner) => <Badge key={owner.id}> {owner.username[0]}</Badge>)}
      </NameWish>
      {isOwnerShowed && (
        <div>
          <button onClick={affectYourselfTowish}>CLICK</button>
          {wish.owner.length > 0 ? (
            wish.owner.map((owner) => <Owner key={owner.id}>💝 {owner.username}</Owner>)
          ) : (
            <MessageNoOwner>
              <p>Personne ne s'est positionné sur ce souhait</p>
              <ButtonStyled
                className={`${isOwnerShowed && 'de'}`}
                onClick={affectYourselfTowish}
              >
                Soyez le premier !
              </ButtonStyled>
            </MessageNoOwner>
          )}
        </div>
      )}
    </WishStyled>
  );
}

const LinkStyled = styled.div`
  display: grid;
  place-items: center;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  background: #3fff54;
  font-size: 10px
`;

const NameWish = styled.div`
  display:grid;
  justify-content: space-between;
  grid-template-columns:25px 1fr 25px;
  grid-gap: 0px 10px;
`;

const Badge = styled.span`
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  border-radius: 50px;
  background: #8a59ff;
  display: grid;
  place-items: center;
  color: #104016;
  color: #ffffff;
`;

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
  margin: 3px 3px 0 0;
`;

const MessageNoOwner = styled.div`
  background: #f0f0f0;
  padding: 5px;
  border-radius: 8px;
  margin-top: 5px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 10px;
`;
