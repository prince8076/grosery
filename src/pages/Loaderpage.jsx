import React from "react";
import Loader from "../components/UI/Loader";

function Loaderpage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Loader className="text-2xl text-custom-purple" />
    </div>
  );
}

export default Loaderpage;
