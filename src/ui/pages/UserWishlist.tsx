import { useParams } from 'react-router-dom';
import Section from 'ui/components/layout/Section';

export default function UserWishlist() {
    let { id } = useParams<'id'>();
    
  const nameList = `Votre liste ${''}`

  return (
      <Section title={nameList}>
        <div>UserWishlist {id}</div>
      </Section>
  );
}
