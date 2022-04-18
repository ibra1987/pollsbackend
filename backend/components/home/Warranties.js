import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faFaceSmileWink,
  faHourglassEnd,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const Warranties = () => {
  return (
    <section className="w-full flex justify-center items-center mt-6 ">
      <div className=" w-2/3 grid grid-cols-1 md:grid-cols-3">
        <div className="m-3  flex flex-col justify-start items-center p-4 bg-gray-100 rounded-md">
          <FontAwesomeIcon
            icon={faRobot}
            className="w-1/5 h-1/3 p-2 text-white bg-blue-600 rounded-md -mt-8"
          />
          <div className="text-gray-700 m-4">
            <h3 className="w-full text-center font-bold m-3">Fake Detection</h3>
            By default, bots and VPN users are blocked from voting on straw
            polls.
          </div>
        </div>
        <div className="m-3  flex flex-col justify-start items-center p-4 bg-gray-100 rounded-md ">
          <FontAwesomeIcon
            icon={faHourglassEnd}
            className="w-1/5 h-1/3 p-2 text-white bg-blue-600 rounded-md -mt-8"
          />
          <div className="text-gray-700 m-4">
            <h3 className="w-full text-center font-bold m-3">Deadlines</h3>
            Our polls run indefinetly. You can change that by setting a
            deadline.
          </div>
        </div>
        <div className="m-3  flex flex-col justify-start items-center p-4 bg-gray-100 rounded-md">
          <FontAwesomeIcon
            icon={faFaceSmileWink}
            className="w-1/5 h-1/3 p-2 text-white bg-blue-600 rounded-md -mt-8"
          />
          <div className="text-gray-700 m-4">
            <h3 className="w-full text-center font-bold m-3">Emoji Support</h3>
            We support all Emojis natively. Feel free to use as many as you
            want!
          </div>
        </div>
        <div className="m-3  flex flex-col justify-start items-center p-4 bg-gray-100 rounded-md">
          <FontAwesomeIcon
            icon={faChartLine}
            className="w-1/5 h-1/3 p-2 text-white bg-blue-600 rounded-md -mt-8"
          />
          <div className="text-gray-700 m-4">
            <h3 className="w-full text-center font-bold m-3">Live Results</h3>
            Evaluate your poll results in a pie chart or bar graph in real-time.
          </div>
        </div>
        <div className="m-3  flex flex-col justify-start items-center p-4 bg-gray-100 rounded-md">
          <FontAwesomeIcon
            icon={faCode}
            className="w-1/5 h-1/3 p-2 text-white bg-blue-600 rounded-md -mt-8"
          />
          <div className="text-gray-700 m-4">
            <h3 className="w-full text-center font-bold m-3">
              Active Development
            </h3>
            We are continuously working on additional features and QoL updates.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranties;
