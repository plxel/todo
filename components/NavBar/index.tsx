import { useRouter } from 'next/router';
import type { MenuItem } from 'primereact';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { useUser } from '../../context/user';

export const NavBar = () => {
  const { user, isLoading, logout, loginWithGoogle } = useUser();
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: 'Goals',
      command: () => router.push('/goals'),
    },
    {
      label: 'People',
      command: () => router.push('/people'),
    },
  ];

  const end = isLoading ? null : user ? (
    <Button onClick={logout} className="p-button-text">
      Logout
    </Button>
  ) : (
    <Button onClick={loginWithGoogle}>Login</Button>
  );
  return <Menubar model={items} end={end} />;
};
