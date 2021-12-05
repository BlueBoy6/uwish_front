import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UserWishlist(props: any) {

    const wishlist = useSelector((state: any) => state?.user?.wishlists);
    const navigate = useNavigate();   

    return (
        <div>
            <h2>Vos wishlists </h2>
            <WishList>
                {wishlist ? wishlist.map((band:any) => <WishStyle onClick={() => navigate(`/user-wishlist/${band.id}`)} key={band.id}>{band.name}</WishStyle>) : "Vous n'avez pas de wishlist... créez en une !"}
            </WishList>
        </div>
    )
}

const WishList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px 10px;
`;

const WishStyle = styled.div`
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  &:hover{
    background: #e3e3e3;
  }
  &:active{
      background: #b3b3b3;
  }
`;