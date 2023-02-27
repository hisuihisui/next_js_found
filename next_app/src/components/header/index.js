import Image from "next/image";
import Link from "next/link";

export default function Header({ position }) {
  const navList = [
    "router",
    "multipage",
    "multipage_state",
    "layout",
    "head_script",
  ];
  return (
    <header className={position === "top" ? "header" : "headerBottom"}>
      <Link href="/">
        <Image
          // loaderの指定
          loader={(src) => src}
          src="/vercel.svg"
          alt="vercel"
          width={177}
          height={40}
        />
      </Link>
      <nav>
        <ul className="nav">
          {navList.map((item) => {
            return (
              <li key={item}>
                <Link href={`/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
