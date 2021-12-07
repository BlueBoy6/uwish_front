import Section from 'ui/components/layout/Section';
import Bands from 'ui/components/pages/dashboard/Bands';
import UserWishlist from 'ui/components/pages/dashboard/UserWishlist';

export function Dashboard() {
  return (
    <Section title="Dashboard">
      <Bands />
      <UserWishlist />
    </Section>
  );
}
