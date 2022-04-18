const PollsIllustration = () => {
  return (
    <div className="w-full md:w-1/2 text-center z-10 mt-6 md:mt-0 ">
      <div className="w-full my-6 h-4 p-2 flex justify-start items-center ">
        <div className="rounded-full w-5 h-5 bg-blue-400 mx-2 border-2 border-gray-100"></div>
        <div className="bg-blue-400 rounded-lg blue h-4"></div>
      </div>
      <div className="w-full my-6 h-4 p-2 flex justify-start items-center ">
        <div className="rounded-full w-5 h-5 bg-red-400 mx-2 border-2 border-gray-100"></div>
        <div className="bg-red-400 rounded-lg  red h-4"></div>
      </div>
      <div className="w-full my-6 h-4 p-2 flex justify-start items-center">
        <div className="rounded-full w-5 h-5 bg-yellow-400 mx-2 border-2 border-gray-100"></div>
        <div className="bg-yellow-400 rounded-lg yellow  h-4"></div>
      </div>
    </div>
  );
};

export default PollsIllustration;
