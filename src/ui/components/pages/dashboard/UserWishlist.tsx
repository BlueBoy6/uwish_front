import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'ui/components/form/Button';
import ModalCreateWishlist from './ModalCreateWishlist';

export default function UserWishlist() {
  const dispatch = useDispatch();
  const [isModalCreateWishlistOpen, setIsModalCreateWishlistOpen] =
    useState(false);

  const [loaded, setLoaded] = useState<boolean>(false);
  const wishlists = useSelector((state: any) => state?.user?.wishlists);
  const userId = useSelector((state: any) => state?.user?.user?.id);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'user/async-get-user-wishlists', payload: { userId } });
      setLoaded(true);
    }
  }, [loaded, dispatch, userId]);

  return (
    <WishlistStyled>
      <h2>Vos wishlists</h2>
      <WishList>
        <Button
          onClick={() =>
            setIsModalCreateWishlistOpen(!isModalCreateWishlistOpen)
          }
        >
          Créer une liste de souhait
        </Button>
        {wishlists
          ? wishlists.map((wishlist: any) => (
              <WishStyle
                onClick={() => navigate(`/user-wishlist/${wishlist.id}`)}
                key={wishlist.id}
              >
                {wishlist.name}
              </WishStyle>
            ))
          : "Vous n'avez pas de wishlist... créez en une !"}
      </WishList>
      {isModalCreateWishlistOpen && (
        <ModalCreateWishlist
          onClickout={() => setIsModalCreateWishlistOpen(false)}
        />
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

const WishStyle = styled.div`
  display: grid;
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  place-items: center;
  text-align: center;
  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #b3b3b3;
  }
`;
