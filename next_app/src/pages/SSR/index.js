import { useEffect, useState } from "react";

// NodeJS上でも実行される
// NodeJSに存在しないwindowオブジェクト等は使用不可
// 　→useEffectを使用すれば、ブラウザ上でのみ実行できる
export default function SSR() {
  console.log("hello");
  const val = 0;
  const [state, setState] = useState("bye");

  useEffect(() => {
    console.log("useEffect");
    window.localStorage.setItem("key", "value");
  }, []);

  return (
    <>
      <h3>{val}</h3>
      <h3>{state}</h3>
    </>
  );
}
