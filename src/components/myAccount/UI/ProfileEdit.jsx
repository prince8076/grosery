import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className=" h-full flex flex-col p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2>Edit Personal Details</h2>
        </div>
        <div
          className="text-custom-purple cursor-pointer"
          onClick={handleBackButton}
        >
          <h2 className="flex items-center gap-1">
            <MdKeyboardArrowLeft />
            Go Back
          </h2>
        </div>
      </div>
      <div className="upload-files flex justify-center my-5">
        <div className="flex items-center flex-col p-3 border-dotted border-black border-[2px] rounded-full h-40 w-40">
          <figure>
            <img src="/images/uploadImage.jpg" alt="" className="h-20" />
          </figure>
          <p className="text-center">Upload Your Photo</p>
        </div>
      </div>
      <div className="my-5">
        <form className="" autoComplete="off">
          <div className="grid gap-5 md:grid-cols-2 w-full">
            <div className="relative z-0 border px-3 rounded-lg">
              <input
                type="text"
                id="first_name"
                className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent text-black border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="first_name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-0 bg-white"
              >
                First Name*
              </label>
            </div>
            <div className="relative z-0 border px-3 rounded-lg">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white"
              >
                Last Name*
              </label>
            </div>
            <div className="relative z-0 border px-3 rounded-lg">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white"
              >
                Email*
              </label>
            </div>

            <div className="relative z-0 border px-3 rounded-lg">
              <input
                type="text"
                value="+910522585"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none text-black focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                disabled
              />
              <label
                for="floating_standard"
                className="flex absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-white"
              >
                Phone <p className="text-red-500 font-bold">(Not Changeable)</p>
              </label>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center gap-1 py-2.5 bg-custom-purple/30 md:w-[50%] rounded-lg">
          <FiAlertCircle />
          <p className="text-xs md:text-[8px]">
            Password cannot be updated while you are logged in by using social
            logins
          </p>
        </div>
      </div>
      <div className="mt-auto mb-5 flex items-center  justify-end gap-1 text-gray-500">
        <button className="px-6 py-2 rounded-lg border-2 transition duration-300 ease-in-out hover:border-custom-purple">
          Reset
        </button>
        <button className="px-4 py-2 rounded-lg border bg-custom-purple text-white">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileEdit;
