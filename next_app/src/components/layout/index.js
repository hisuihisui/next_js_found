import Header from "../header_2";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
    </>
  );
}
