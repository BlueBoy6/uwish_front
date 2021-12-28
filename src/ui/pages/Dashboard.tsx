import { useSelector } from 'react-redux';
import Section from 'ui/components/layout/Section';
import Groups from 'ui/components/pages/dashboard/Groups';
import UserWishlist from 'ui/components/pages/dashboard/UserWishlist';
import WishesWhereUserIsParticipant from 'ui/components/pages/dashboard/WishesWhereUserIsParticipant';

export function Dashboard() {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Section title="Dashboard">
      <Groups />
      <UserWishlist />
      <WishesWhereUserIsParticipant/>
    </Section>
  );
}
