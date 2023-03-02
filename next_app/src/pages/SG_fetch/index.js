import ArticleList from "@/components/articleList";
import axios from "axios";
import Head from "next/head";

export default function Page({ articles }) {
  // articlesがnull or undefined
  if (!articles) {
    return <div>データがありません</div>;
  }

  return (
    <>
      <Head>
        <title>いちらん</title>
      </Head>
      <h3>フェッチ</h3>
      <ArticleList list={articles} />
    </>
  );
}

export async function getStaticProps() {
  // APIエンドポイント
  const ENDPOINT = "http://localhost:4030/articles";
  // GETリクエスト
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  console.log(result);

  return { props: { articles: result } };
}
