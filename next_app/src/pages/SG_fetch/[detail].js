import Article from "@/components/article";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const ENDPOINT = "http://localhost:4030/articles";

export default function Detail({ article }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Article data={article} />
    </>
  );
}

export async function getStaticPaths() {
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  if (!result) return;

  const paths = result.map((article) => ({
    params: { detail: article.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // GETリクエスト
  const result = await axios
    .get(`${ENDPOINT}/${params.detail}`)
    .then((res) => res.data);

  return { props: { article: result } };
}
