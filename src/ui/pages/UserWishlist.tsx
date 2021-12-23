import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputSelect from 'ui/components/form/InputSelect';
import Section from 'ui/components/layout/Section';

export default function UserWishlist() {
  let { id } = useParams<'id'>();
  const wishlist = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  const a = ['a', 'b', 'c'];

  useEffect(() => {
    if (!wishlist) {
      dispatch({ type: 'wishlist/async-fetch-datas', payload: { id } });
    }
  }, [wishlist, dispatch, id]);

  const nameList = `Votre liste `;

  return (
    <Section title={nameList}>
      <div>UserWishlist {id}</div>
      <div>
        <InputSelect options={a} />
      </div>
    </Section>
  );
}
