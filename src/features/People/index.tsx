import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { Profile } from '../../models/profile';
import { Avatar } from '../../ui/Avatar';
import { Card } from '../../ui/Card';

import s from './styles.module.css';

interface Props {
  profiles: Profile[];
}

export const People = ({ profiles }: Props) => {
  return (
    <div>
      <h1>
        <FormattedMessage defaultMessage="People" />
      </h1>

      <div className={s.list}>
        {profiles.map((profile) => (
          <Link key={profile.id} href={`/people/${profile.id}`}>
            <Card
              title={
                <Avatar
                  size="large"
                  shape="circle"
                  image={`https://avatars.dicebear.com/api/bottts/${profile.id}.svg`}
                />
              }
              subTitle={profile.email}
              className={s.card}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
