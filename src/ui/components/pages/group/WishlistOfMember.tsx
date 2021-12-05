import { wishlistType } from 'types/wishlist';
import SubSection from 'ui/components/layout/SubSection';
import { useSelector } from 'react-redux';

export default function WishlistOfMember({
  wishlist,
}: {
  wishlist: wishlistType;
}) {
  const members = useSelector((state: any) => state?.group.users) as any;
  const wishlistOwner = members.find(
    (member: any) => member.id === wishlist.user,
  );
  return (
    <SubSection>
      <div>
        <p>La liste de {wishlistOwner.username}</p>
        <h4>{wishlist.name}</h4>
      </div>
    </SubSection>
  );
}
