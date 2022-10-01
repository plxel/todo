import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type UserContext = {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const UserContext = createContext<UserContext | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(supabase.auth.user());
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user();

      if (sessionUser) {
        const { data: profile } = await supabase
          .from('profile')
          .select('*')
          .eq('id', sessionUser.id)
          .single();

        setUser({
          ...sessionUser,
          ...profile,
        });

        setIsLoading(false);
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  useEffect(() => {
    fetch('/api/set-supabase-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
        session: supabase.auth.session(),
      }),
    });
    /*axios.post("/api/set-supabase-cookie", {
      event: user ? "SIGNED_IN" : "SIGNED_OUT",
      session: supabase.auth.session(),
    });*/
  }, [user]);

  useEffect(() => {
    /*if (user) {
      const subscription = supabase
        .from(`profile:id=eq.${user.id}`)
        .on("UPDATE", (payload) => {
          setUser({ ...user, ...payload.new });
        })
        .subscribe();

      return () => {
        supabase.removeSubscription(subscription);
      };
    }*/
  }, [user]);

  const loginWithGoogle = async () => {
    await supabase.auth.signIn({
      provider: 'google',
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  const exposed = {
    user,
    loginWithGoogle,
    logout,
    isLoading,
  };

  return (
    <UserContext.Provider value={exposed}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('useUser must be within UserProvider');
  }

  return context;
};

export { UserProvider };
