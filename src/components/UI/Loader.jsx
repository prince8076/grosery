import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { LuLoader2 } from "react-icons/lu";
function Loader({ className }) {
  return (
    <div>
      <LuLoader2 className={`${className && className} animate-spin`} />
    </div>
  );
}

export default Loader;
