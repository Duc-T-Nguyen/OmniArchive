// pages/_app.tsx
import '../app/globals.css';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <NavigationBar />
        <Component {...pageProps} />
    </>
);
}