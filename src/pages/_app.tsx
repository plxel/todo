import '../styles/styles';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { UserProvider } from '../context/user';
import enLocales from '../../content/compiled-locales/en.json';
import { AppLayout } from '../components/layouts/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
    case 'en':
      return enLocales;
    default:
      return enLocales;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <UserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserProvider>
    </IntlProvider>
  );
}

export default MyApp;
