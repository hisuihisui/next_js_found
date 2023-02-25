import { useRouter } from "next/router";


// /router/****/setting でアクセス可能
export default function Setting({ query }) {
  // 2. RouterからuseRouterを使用する
  const router = useRouter()
  console.log(router)

  return <h1>routerから取得:{router.query.name}</h1>

  // return <h1>{query.name}</h1>;
}

// URLから引数をもらう
// 1. getSeverSideProps という関数を使用する
// contextのqueryというプロパティに入っている
// SSRを使用する際に使用する
export async function getServerSideProps(context) {

  const {query} = context
  return {
    props: { query },
  };
}
