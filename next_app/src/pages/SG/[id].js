import { useRouter } from "next/router";

export default function Page({ id, date }) {
  const router = useRouter();
  // 想定していない値へアクセスしたとき
  // ページが生成されるまでtrue
  // ページが作成されるとfalse
  if (router.isFallback) {
    return <h3>Loading...</h3>
  }

  return <h3>このページは{id}です。{date}</h3>;
}

// SSGで動的ルーティングを使用する際にはgetStaticPaths関数を使用
// ビルド時にはどんなパスでアクセスされるかわからないため
export async function getStaticPaths() {
  console.log("getStaticPaths executed");

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
    // 動的ルーティングで指定していない値にアクセスが来た時に影響
    // false:404へいく
    // true:、関数コンポーネントの変更が必要
    // "blocking":ページが生成されるまでユーザーにレスポンスをしない
    fallback: true,
  };
}

// 動的ルーティングのURLの値を取得する
// getStaticPathsで指定したパスの数だけビルド時に実行される
// 動的ルーティングの場合、
// 存在しないページにアクセスが来た場合は生成するためにNodeJSで実行される
export async function getStaticProps({params}) {
  // console.log(context);
  console.log("getStaticProps executed");

  const date = new Date;

  return {
    props: {
      id: params.id,
      // date型を文字列へ変換
      date: date.toJSON(),
    },
    // ISRの設定
    // getStaticPropsに設定する
    // これだと5秒感覚
    revalidate: 5,
  };
}
