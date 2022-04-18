import NavBar from "../shared/NavBar";
import Footer from "../home/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col justify-start items-center justify-self-stretch ">
        {children}
      </main>
    </>
  );
}
