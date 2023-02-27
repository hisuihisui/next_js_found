export default function Page({ id }) {
  return <h3>このページは{id}です。</h3>;
}

// SSGで動的ルーティングを使用する際にはgetStaticPaths関数を使用
// ビルド時にはどんなパスでアクセスされるかわからないため
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: false,
  };
}

// 動的ルーティングのURLの値を取得する
// getStaticPathsで指定したパスの数だけビルド時に実行される
export async function getStaticProps({params}) {
  // console.log(context);

  return {
    props: {
      id: params.id,
    },
  };
}
