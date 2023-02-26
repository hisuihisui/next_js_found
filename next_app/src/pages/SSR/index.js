import { useEffect, useState } from "react";

// NodeJS上でも実行される
// NodeJSに存在しないwindowオブジェクト等は使用不可
// 　→useEffectを使用すれば、ブラウザ上でのみ実行できる
export default function SSR({ message }) {
  console.log("hello");
  console.log(message);
  const val = 0;
  const [state, setState] = useState("bye");

  useEffect(() => {
    console.log("useEffect");
    window.localStorage.setItem("key", "value");
    // cookieを設定
    document.cookie = "val=0; path=/;"
  }, []);

  return (
    <>
      <h3>{val}</h3>
      <h3>{state}</h3>
    </>
  );
}

// NodeJS上で実行される
// 他の画面から遷移してきた場合は、実行されJsonをブラウザに返す
// 　→それをもとにコンポーネントの引数が処理される
export async function getServerSideProps(context) {
  const { cookie } = context.req.headers;
  console.log(cookie);

  return {
    // リダイレクト設定
    // redirect: {
    //   // リダイレクト先
    //   destination: "/",
    //   // 恒久的な設定かどうか
    //   // ステータスコードやクローラーの解釈が異なる
    //   permanent: true,
    // },
    // コンポーネントに引き渡す値
    props: {
      message: "From Server Side Props",
    },
  };
}
