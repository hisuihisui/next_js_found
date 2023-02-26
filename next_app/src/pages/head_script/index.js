import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

export default function Page() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        {/* og:title →  URL貼り付けやSNSで読み取るタイトル*/}
        <meta property="og:title" content="ページのタイトル" />
      </Head>
      {/* afterInteractive :画面が表示されてからスクリプトを読み込む */}
      {/* beforeInteractive :画面が表示されるときにスクリプトを読み込む */}
      {/* lazyOnLoad :画面が表示されるときに空きがあるときに読み込む */}
      {/* onLoad:スクリプトを読み込んだ後に実行 */}
      {/* onError;スクリプトの実行時にエラーになった場合に実行 */}
      <Script
        src="/jquery-3.2.1.min.js"
        // 読み込むモードの変更
        // 初期値：afterInteractive
        strategy="beforeInteractive"
        onLoad={() => setLoad(true)}
        onError={(e) => {
          console.error(e);
        }}
      />
      <h3>jQouery loaded: {load ? "true" : "false"}</h3>
      {/* スクリプトをインラインで記述 */}
      <Script dangerouslySetInnerHTML={{
        __html: `console.log('Inline Script')`
      }}/>
    </>
  );
}
