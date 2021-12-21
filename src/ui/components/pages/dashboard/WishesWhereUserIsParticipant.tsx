import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { wishesType } from 'types/wishlist';

export default function WishesWhereUserIsParticipant() {
  const wishes = useSelector((state: any) => state?.user?.wishesParticipant);
  const userId = useSelector((state: any) => state?.user?.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!wishes) {
      dispatch({
        type: 'user/async-get-wishes-where-user-is-participant',
        payload: { userId },
      });
    }
  }, [wishes, userId, dispatch]);

  return (
    <WishlistStyled>
      <h1>Les souhaits auxquels vous participez</h1>
      {wishes && (
        <WishList>
          {wishes.map((wish: wishesType) => (
            <Wishes key={wish.id}>{wish.name}</Wishes>
          ))}
        </WishList>
      )}
    </WishlistStyled>
  );
}

const WishlistStyled = styled.div`
  margin-top: 20px;
`;

const WishList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 10px;
`;

const Wishes = styled.div`
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #b3b3b3;
  }
`;
