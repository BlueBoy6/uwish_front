import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from 'ui/components/layout/Section';
import { useDispatch, useSelector } from 'react-redux';
import { formatForDisplay } from 'helpers/date';
import Members from 'ui/components/pages/group/Members';
import WishlistsOfMembers from 'ui/components/pages/group/WishlistsOfMembers';

export default function UserWishlist() {
  let { id } = useParams<'id'>();
  const [tried, setTried] = useState(false);

  const dispatch = useDispatch();

  const group = useSelector((state: any) => state?.group) as any;

  useEffect(() => {
    if (!tried) {
      dispatch({
        type: 'group/async-get-group',
        payload: id,
      });
      console.log('group : ', group);
      
      if (group) {
        setTried(true);
      }
    }
  }, [tried, dispatch, id, group]);

  if (group) {
    return (
      <Section title={group.name}>
        <p>Groupe créé : {formatForDisplay(group.createdAt)}</p>
        <Members members={group.members} />
        {group.wishlists && <WishlistsOfMembers wishlists={group.wishlists} />}
      </Section>
    );
  }
  return <div>Oups on a pas trouvé ton groupe..</div>;
}
