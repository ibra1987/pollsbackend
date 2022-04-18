import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="w-full bg-blue-900 h-48 mt-6 flex flex-col justify-center items-center ">
      <div className="flex justify-center items-end">
        <h1 className="text-white text-4xl font-bold tracking-wider">
          Get Started Now
        </h1>
        <h3 className="text-gray-400 text-2xl px-4">for free</h3>
      </div>
      <Link href="/register">
        <button className="px-8 py-2 bg-white mt-4 text-blue-900 rounded-md tracking-wide font-bold hover:bg-gray-100">
          Register
        </button>
      </Link>
    </section>
  );
};

export default GetStarted;
