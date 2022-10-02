import Link from 'next/link';
import { useRouter } from 'next/router';
import type { MenuItem } from 'primereact';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { FormattedMessage, useIntl } from 'react-intl';
import { useUser } from '../../../context/user';

import s from './styles.module.css';

export const NavBar = () => {
  const { user, isLoading, logout, loginWithGoogle } = useUser();
  const router = useRouter();
  const intl = useIntl();

  const items: MenuItem[] = [
    {
      label: intl.formatMessage({ defaultMessage: 'Goals' }),
      command: () => router.push('/goals'),
    },
    {
      label: intl.formatMessage({ defaultMessage: 'People' }),
      command: () => router.push('/people'),
    },
  ];

  const end = user
    ? (
      <Button onClick={logout} className="p-button-text">
        <FormattedMessage defaultMessage="Logout" />
      </Button>
    )
    : (
      <Button onClick={loginWithGoogle}><FormattedMessage defaultMessage="Login" /></Button>
    );

  return <Menubar start={<div className={s.logo}><Link href="/">TODO</Link></div>} model={items} end={isLoading ? null : end} />;
};
