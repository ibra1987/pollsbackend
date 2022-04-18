import Head from "next/head";
import Footer from "../components/home/Footer";
import GetStarted from "../components/home/GetStarted";
import Header from "../components/home/Header";
import Usage from "../components/home/Usage";
import UsersStats from "../components/home/UsersStats";
import Warranties from "../components/home/Warranties";
import NavBar from "../components/shared/NavBar";

export default function Home() {
  return (
    <div className="  mx-auto ">
      <Head>
        <title>Create free polls online </title>
        <meta
          name="description"
          content="create free polls for your fans, school projects for free"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-center">
        <Header />
        <Usage />
        <UsersStats />
        <Warranties />
        <GetStarted />
      </main>

      <footer className=""></footer>
    </div>
  );
}
