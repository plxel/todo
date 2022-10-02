import { FormattedMessage } from "react-intl"
import Link from "next/link"
import { Avatar } from "primereact/avatar"
import { Card } from "primereact/card"
import { Profile } from "../../models/profile"
import s from './styles.module.css'

interface Props {
  profiles: Profile[];
}

export const People = ({ profiles }: Props) => {
  return (
    <div>
      <h1><FormattedMessage defaultMessage="People" /></h1>

      <div className={s.list}>
        {profiles.map(profile => <Link key={profile.id} href={`/people/${profile.id}`}><Card  title={<Avatar size="large" shape="circle" image={`https://avatars.dicebear.com/api/bottts/${profile.id}.svg`} />} subTitle={profile.email} className={s.card} /></Link>)}
      </div>
    </div>
  )
}
