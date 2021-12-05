import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Section from 'ui/components/layout/Section';
import { useDispatch, useSelector } from 'react-redux';
import { formatForDisplay } from 'helpers/date';
import Members from 'ui/components/pages/group/Members';
import WishlistsOfMembers from 'ui/components/pages/group/WishlistsOfMembers';

export default function UserWishlist() {
  let { id } = useParams<'id'>();

  const dispatch = useDispatch();

  const group = useSelector((state: any) => state?.group) as any;
  console.log('group Page', group);

  useEffect(() => {
    if (!group.name) {
      console.log('on tente de récupérer')
      dispatch({
        type: 'group/async-get-group',
        payload: id,
      });
    }
  }, [group, dispatch, id]);

  return (
    <Section title={group.name}>
      <p>Groupe créé : {formatForDisplay(group.created_at)}</p>
      <Members members={group.users} />
      <WishlistsOfMembers wishlists={group.wishlists} />
    </Section>
  );
}


