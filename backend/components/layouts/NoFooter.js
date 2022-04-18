import NavBar from "../shared/NavBar";
import Footer from "../home/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
