import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/user";
import { Button } from "primereact/button";

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