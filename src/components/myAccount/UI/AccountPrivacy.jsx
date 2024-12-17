import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function AccountPrivacy() {
  const [isExpand, setIsExpanded] = useState(false);

  const toggleMore = () => {
    setIsExpanded(!isExpand);
  };
  return (
    <div className="md:p-5">
      <div>
        <h1 className="font-bold my-2">Account privacy and policy</h1>
        <p className="text-xs font-custom-poppins">
          {!isExpand
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quae autem incidunt eaque. Nostrum labore eveniet dignissimos corrupti voluptate facilis! Nemo, rem tempora iure nulla perferendis harum! Suscipit, minus."}
        </p>
        {!isExpand && (
          <button
            onClick={toggleMore}
            className="text-[12px] text-custom-purple  flex items-center gap-1"
          >
            Read More
            <IoMdArrowDropdown />
          </button>
        )}
        <NavLink to="/account/delete-account">
          <div className="border flex items-center justify-between p-2 rounded-lg mt-5">
            <div className="flex items-center gap-2">
              <RiDeleteBin6Line />
              <h1>
                <p className="text-xs font-bold text-gray-600">
                  Request to delete account
                </p>
                <p className="text-[10px]">
                  Request to closure of your account
                </p>
              </h1>
            </div>
            <IoMdArrowDropright />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default AccountPrivacy;
