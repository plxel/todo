import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useUser } from "../context/user";

const Login = () => {
  const { loginWithGoogle } = useUser();

  const handleClick = () => {
    loginWithGoogle();
  };

  return <p><button onClick={handleClick}>Login</button></p>;
};

export default Login;