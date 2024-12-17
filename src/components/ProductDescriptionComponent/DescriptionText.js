import React from "react";

function DescriptionText({ prodText }) {
  return (
    <div className="m-4 flex flex-col gap-4 p-2 lg:max-w-[550px] ">
      {prodText.map((data, index) => {
        return (
          <div className="">
            {data.head && <div className="font-[600]">{data.head}</div>}
            <div className="font-[550] text-[16px]">{data.title}</div>
            <span className="text-[14px] font-[400] break-words">
              {data.detail}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default DescriptionText;
