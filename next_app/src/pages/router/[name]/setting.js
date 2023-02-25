import { useRouter } from "next/router";

// /router/****/setting でアクセス可能
export default function Setting({ query }) {
  // 2. RouterからuseRouterを使用する
  const router = useRouter();
  // console.log(router);

  const clickHandler = () => {
    // 第１引数：遷移先のパス
    // 第２引数：URLとして表示されるパス
    // 今回はルートのパスに遷移するが、URLとしては"/dummy-url"となる
    router.push("/", "/dummy-url");
    //
    // 遷移したという履歴を上書く
    // 　→画面を戻った場合、この前の画面ではなく、さらにひとつ前の画面に戻る
    // 第１引数：遷移先のパス
    // 第２引数：URLとして表示されるパス
    // router.replace("/", "/dummy-url");
    //
    //１つ前の画面に戻る
    // 引数はなし
    // router.back();
    //
    // 画面のリロード
    // 引数はなし
    // router.reload();
  };

  return (
    <>
      <h1>routerから取得:{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );

  // return <h1>{query.name}</h1>;
}

// URLから引数をもらう
// 1. getSeverSideProps という関数を使用する
// contextのqueryというプロパティに入っている
// SSRを使用する際に使用する
export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: { query },
  };
}
