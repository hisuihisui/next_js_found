import '@/styles/globals.css';
import { AppProvider } from '@/context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    // どのコンポーネントからもAppContextを参照可能
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
