import { Button } from 'primereact/button';
import { useUser } from '../context/user';

const Login = () => {
  const { loginWithGoogle } = useUser();

  const handleClick = () => {
    loginWithGoogle();
  };

  return (
    <div>
      <Button onClick={handleClick}>Login with Google</Button>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Login;
