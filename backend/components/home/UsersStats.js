import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBarsProgress,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";

const UsersStats = () => {
  return (
    <section className="w-full  bg-neutral-50 my-10   flex flex-col justify-start items-center  py-6 ">
      <p
        className="w-full text-center text-gray-600 mt-6
        tracking-wide text-xl underline"
      >
        TRUSTED BY OVER 300,000 USERS WORLDWIDE
      </p>
      <div className="w-full md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="flex flex-col justify-start items-center  my-6  ">
          <FontAwesomeIcon icon={faUsers} className=" text-gray-400 w-16   " />
          <span className="text-3xl md:text-2xl font-bold text-blue-500 opacity-60 mt-6">
            100K+ users
          </span>
        </div>

        <div className="flex flex-col justify-start items-center my-6   ">
          <FontAwesomeIcon
            icon={faBarsProgress}
            className="
            text-gray-400
            w-16
           
          "
          />
          <span className="text-3xl  md:text-2xl  font-bold text-blue-500 opacity-60 mt-4">
            3M+ polls
          </span>
        </div>
        <div className="flex flex-col justify-start items-center my-6   ">
          <FontAwesomeIcon
            icon={faPersonBooth}
            className="w-16 text-gray-400 "
          />
          <span className="text-3xl  md:text-2xl  font-bold text-blue-500 opacity-60 mt-4">
            50M+ votes
          </span>
        </div>
      </div>
    </section>
  );
};

export default UsersStats;
