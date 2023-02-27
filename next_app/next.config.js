/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // useEffectを１回のみ実行
  reactStrictMode: false,
  // Imegeコンポーネントをエクスポートできるように設定追記
  images: {
    loader: "custom",
  },
  // URLの末尾に / をつけてアクセスするように設定
  // export したときに ***.htmlではなく
  // → ***というフォルダを作成し、その下にindex.htmlを生成するようになる
  trailingSlash: true,
  // リライト設定
  // source→destinationとして処理する
  async rewrites() {
    return [
      {
        source: "/personal",
        destination: "/multipage?step=1",
      },
      {
        source: "/confirm",
        destination: "/multipage?step=2",
      },
    ];
  },
};

module.exports = nextConfig;
