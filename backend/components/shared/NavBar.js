import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className=" w-full flex justify-center items-center shadow border-b border-gray-100 ">
      <nav className="w-4/5 flex justify-between items-center  py-4 px-2">
        <div className="underline">Free Polls Online</div>

        <ul className=" flex flex-1  justify-end items-center px-2 ">
          <li className="mx-4 text-lg ">
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? "bg-blue-400 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                    : "text-gray-600"
                }
              >
                Home
              </a>
            </Link>
          </li>

          <li className="mx-4 text-lg text-gray-600">
            <Link href="/register">
              <a
                className={
                  router.pathname === "/register"
                    ? "bg-blue-400 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                    : "text-gray-600"
                }
              >
                Register
              </a>
            </Link>
          </li>
          <li className="mx-4 text-lg text-gray-600">
            <Link href="/login">
              <a
                className={
                  router.pathname === "/login"
                    ? "bg-blue-400 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                    : "text-gray-600"
                }
              >
                Login
              </a>
            </Link>
          </li>
          <li className="mx-4 text-lg ">
            <Link href="/public-polls-surveys">
              <a
                className={
                  router.pathname === "/public-polls-surveys"
                    ? "bg-blue-400 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                    : "text-gray-600"
                }
              >
                Public Polls
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
