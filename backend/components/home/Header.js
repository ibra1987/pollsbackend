import PollsIllustration from "./PollsIllustration";

const Header = () => {
  return (
    <header className="w-full  flex flex-col md:flex-row  rounded-md justify-center items-center lg:p-4   relative ">
      <div className="headerTopping rounded-md  "></div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center  h-full z-10">
        <h1 className="text-4xl md:text-6xl mt-24 font-extrabold  tracking-widest text-blue-500">
          Create your pool
        </h1>
        <p className="text-slate-500 leading-tight w-5/6 md:w-4/6 my-4 md:pr-4 p-2">
          Want to ask your friends where to go friday night or arrange a meeting
          with co-workers? Create a poll - and get answers in no time.
        </p>
        <button className="px-4 py-2 mt-4  bg-blue-500 text-white text-xl tracking-wide  rounded hover:bg-blue-700 ">
          Create a poll
        </button>
      </div>

      <PollsIllustration />
    </header>
  );
};

export default Header;
