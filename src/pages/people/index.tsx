import { People } from '../../features/People';
import { supabase } from '../../lib/supabase';
import { Profile } from '../../models/profile';

interface Props {
  profiles: Profile[];
}

const PeoplePage = ({ profiles }: Props) => <People profiles={profiles} />;

export async function getServerSideProps() {
  const { data: profiles } = await supabase
    .from<Profile>('profile')
    .select('*')
    .limit(20);

  return {
    props: {
      profiles: profiles || [],
    },
  };
}

export default PeoplePage;
