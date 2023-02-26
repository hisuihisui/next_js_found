import Layout from "@/components/layout/layout1";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    // どのコンポーネントからもAppContextを参照可能
    <AppProvider>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
}
