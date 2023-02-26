import Link from "next/link";
import { navList } from "../data/nav";

// export default したものが表示される
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* Linkコンポーネント */}
      {/* href属性で遷移先を指定して、aタグを中に書く */}
      {/* as属性：ダミーのURLを記述可能 */}
      {/* 遷移時画面のリロードが発生しない */}
      {/* <Link href="/router" as="/dummy-url"> */}
      {/* query属性：クエリパラメータの指定可能 */}
      <Link
        href={{
          pathname: "/router",
          as: "/dummy-url",
          query: { key: "value" },
        }}
      >
        /router
      </Link>
      <br />
      {/* 画面遷移時リロードが発生する */}
      <a href="/router"></a>
      <ul>
        {navList.map((item) => {
          return (
            <li key={item}>
              <Link href={`/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
