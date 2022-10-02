import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-purple/theme.css';
import '../styles/globals.css';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { UserProvider } from '../context/user';
import { NavBar } from '../components/NavBar';
import enLocales from "../content/compiled-locales/en.json";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
    switch (shortLocale) {
    case "en":
      return enLocales;
    default:
      return enLocales;
    }
  }, [shortLocale]);
  
  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}>
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />
      </UserProvider>
    </IntlProvider>
  );
}

export default MyApp;
