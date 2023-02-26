/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // useEffectを１回のみ実行
  reactStrictMode: false,
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

module.exports = nextConfig
