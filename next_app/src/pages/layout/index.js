import Link from "next/link";


export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/layout/layout1">レイアウト1</Link>
      </li>
      <li>
        <Link href="/layout/layout2">レイアウト2</Link>
      </li>
    </ul>
  );
}
