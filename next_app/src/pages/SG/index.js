export default function IndexPage({ message }) {
  return <h3>SG:{message}</h3>;
}

// SGを使用する際のpropsの渡し方
// ビルドのタイミングで実行される
// ここで返す値をビルド時にjsonファイルにしてexportする
export async function getStaticProps() {
  console.log("getStaticProps");
  return {
    props: { message: "From Static Props" },
  };
}
