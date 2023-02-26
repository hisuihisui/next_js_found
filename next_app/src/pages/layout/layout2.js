import Layout2 from "@/components/layout/layout2";

export default function Page() {
  return (
    <div>
      <p>レイアウト2: ヘッダーがBottomにある</p>
    </div>
  );
}

// このプロパティの有無でLayout2を適用するか決める
Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>;
};
