import "primereact/resources/primereact.min.css";  
import 'primereact/resources/themes/lara-light-purple/theme.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '../context/user'
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <NavBar />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
