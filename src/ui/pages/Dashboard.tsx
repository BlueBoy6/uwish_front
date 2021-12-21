import Section from 'ui/components/layout/Section';
import Bands from 'ui/components/pages/dashboard/Bands';
import UserWishlist from 'ui/components/pages/dashboard/UserWishlist';
import WishesWhereUserIsParticipant from 'ui/components/pages/dashboard/WishesWhereUserIsParticipant';

export function Dashboard() {
  return (
    <Section title="Dashboard">
      <Bands />
      <UserWishlist />
      <WishesWhereUserIsParticipant/>
    </Section>
  );
}
