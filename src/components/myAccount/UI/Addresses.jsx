import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
function Addresses({ address }) {
  const { display_address, locationType } = address;
  return (
    <div className="flex items-center justify-between py-3 ">
      <h1 className="flex item-center text-xs">
        <p className="font-bold">{locationType}-</p>
        {display_address}
      </h1>
      <BsThreeDotsVertical className="text-gray-00" />
    </div>
  );
}

export default Addresses;
