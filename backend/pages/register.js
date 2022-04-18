import Link from "next/link";
import { useState } from "react";
import { checkEmail, checkPassword, isEmpty } from "../utils/helpers";
const register = () => {
  const [errors, setErrors] = useState([]);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //empty fields
    if (
      isEmpty(formState.fullName) ||
      isEmpty(formState.email) ||
      isEmpty(formState.password)
    ) {
      return (
        !errors.includes("Please fill in all fields") &&
        setErrors([...errors, "Please fill in all fields"])
      );
    }

    // email regex and email confirmatiom
    if (!checkEmail(formState.email, formState.emailConfirmation)) {
      return (
        !errors.includes("Please check and confirm your email address") &&
        setErrors([...errors, "Please check and confirm your email address"])
      );
    }

    // check passwords

    if (!checkPassword(formState.password, formState.passwordConfirmation)) {
      return (
        !errors.includes("Please check your passwords") &&
        setErrors([...errors, "Please check your passwords"])
      );
    }
  };

  const handleOnChange = (e) => {
    setErrors([]);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full p-2 flex flex-col justify-start items-center  ">
      <form
        onSubmit={handleOnSubmit}
        className="w-full md:w-3/5 lg:w-2/5 border  rounded-md bg-white my-6 flex flex-col justify-start items-center"
      >
        <h1 className=" w-4/5 mt-4 mx-auto text-gray-500 text-3xl font-bold tracking-widest">
          Sign Up and start creating polls and surveys
        </h1>
        <div className="h-28 w-5/6 rounded-md bg-white  mt-2 ">
          {errors.length > 0 && (
            <ul className="text-red-600 p-4 w-full bg-red-50">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="my-2 w-full  md:w-4/5 pb-1 flex flex-col justify-start items-start ">
          <label htmlFor="fullName" className=" px-2 text-gray-500">
            Full Name:
          </label>

          <input
            type="text"
            name="fullName"
            value={formState.fullName}
            onChange={handleOnChange}
            className="outline-none w-full px-2 border-b-2 mt-2  
            focus:border-b-2 focus:border-blue-400"
            placeholder="Your full name here..."
          />
        </div>
        <div className="my-2 w-full md:w-4/5 pb-1 flex flex-col justify-start items-start ">
          <label htmlFor="email" className=" px-2 text-gray-500">
            Email:
          </label>
          <input
            type="email"
            value={formState.email}
            onChange={handleOnChange}
            name="email"
            className="outline-none w-full px-2 border-b-2 mt-2 
             focus:border-b-2 focus:border-blue-400"
            placeholder="Your main email address..."
          />
        </div>
        <div className="my-2 w-full md:w-4/5 pb-1 flex flex-col justify-start items-start ">
          <label htmlFor="emailConfirmation" className=" px-2 text-gray-500">
            Confirm Email:
          </label>

          <input
            type="email"
            value={formState.emailConfirmation}
            onChange={handleOnChange}
            name="emailConfirmation"
            className="outline-none w-full px-2 border-b-2 mt-2  
            focus:border-b-2 focus:border-blue-400"
            placeholder="Confirm your email..."
          />
        </div>
        <div className="my-2 w-full md:w-4/5 pb-1 flex flex-col justify-start items-start ">
          <label htmlFor="password" className=" px-2 text-gray-500">
            Password:
          </label>
          <input
            type="password"
            value={formState.password}
            onChange={handleOnChange}
            name="password"
            className="outline-none w-full px-2 border-b-2 mt-2  
            focus:border-b-2 focus:border-blue-400"
            placeholder="Choose a password"
          />
          <span className="text-xs text-gray-500 p-0 m-0">
            Must be 8 characters at least with, at least one number, one
            uppercase, one lowercase and one symbol.
          </span>
        </div>
        <div className="my-2 w-full md:w-4/5 pb-1 flex flex-col justify-start items-start ">
          <label htmlFor="passwordConfirmation" className=" px-2 text-gray-500">
            Confirm Password:
          </label>

          <input
            type="password"
            value={formState.passwordConfirmation}
            onChange={handleOnChange}
            name="passwordConfirmation"
            className="outline-none w-full px-2 border-b-2 mt-2 
             focus:border-b-2 focus:border-blue-400"
            placeholder="Confirm your password..."
          />
        </div>
        <div className="my-2 w-full md:w-4/5 pb-1 flex  justify-center items-start ">
          <input
            type="submit"
            value="Sign Up"
            className="block w-full py-3
             text-white text-2xl rounded-md 
            bg-blue-500 cursor-pointer 
            tracking-widest hover:bg-blue-600 font-extrabold"
          />
        </div>
      </form>
      <span className="text-gray-700">
        Already have an account?
        <Link href="/login">
          <a className="text-emerald-500 mx-4 underline">Sign in</a>
        </Link>
      </span>
    </section>
  );
};

export default register;
