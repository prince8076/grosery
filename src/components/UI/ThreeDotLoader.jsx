import React from "react";
import { ThreeDots } from "react-loader-spinner";
function ThreeDotLoader() {
  return (
    <div className="text-custom-purple">
      <ThreeDots
        visible={true}
        color="#8E0F5D"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        radius="9"
      />
    </div>
  );
}

export default ThreeDotLoader;
