import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
const Usage = () => {
  /*  const createBalls = () => {
    const parent = document.querySelector("#motif");
    const classes = [
      "w-10",
      "h-10",
      "bg-gray-100",
      "rounded-full",
      "m-6",
      "-z-10",
      "animatedBall",
    ];

    for (let i = 0; i < 10; i++) {
      const ball = document.createElement("div");
      ball.classList.add(...classes);

      parent.appendChild(ball);
    }
  };*/

  useEffect(() => {
    //createBalls();
  }, []);

  return (
    <div className="  w-full flex py-10 relative  flex-col md:flex-row justify-start items-center md:justify-around">
      <div
        id="motif"
        className="absolute  h-full w-full -z-10 ml-0 mb-0 grid-cols-10 grid "
      ></div>
      <div className="w-full md:w-2/5  h-48  skew-y-3 rounded-md  p-4  bg-white border-8   cursor-pointer shadow-xl border-green-50 my-4  flex flex-col md:flex-row justify-start items-center md:justify-center ">
        <FontAwesomeIcon
          icon={faTemperatureHalf}
          className="w-12 mx-8 text-greenish"
        />
        <p className="flex-1 text-gray-600 tracking-wide text-md ">
          A straw poll is a voting that can be used to help people to easily
          determine the opinion of a group or the public on some issue. Straw
          polls are very useful when only the majority opinion is important and
          not the opinion of each individual participant.
        </p>
      </div>
      <div className="w-full md:w-2/5 h-48 skew-y-3  p-4 bg-white  border-green-50  cursor-pointer shadow-xl border-8 my-4  flex flex-col md:flex-row justify-start items-center md:justify-center ">
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className="w-16 mx-8 text-greenish"
        />
        <p className="flex-1 text-gray-600  tracking-wide text-md ">
          A straw poll is a voting that can be used to help people to easily
          determine the opinion of a group or the public on some issue. Straw
          polls are very useful when only the majority opinion is important and
          not the opinion of each individual participant.
        </p>
      </div>
    </div>
  );
};

export default Usage;
