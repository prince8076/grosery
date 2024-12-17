import React from "react";
import { NavLink, useParams } from "react-router-dom";

function SubCategory({ name, image, id }) {
  const { subID } = useParams();
  const isActive = id == subID;
  return (
    <NavLink to={`/cn/${name}/cid/${id}`}>
      <div
        className={`${
          isActive
            ? "border-r-4  border-r-custom-purple lg:bg-pink-200 lg:border-l-4 lg:border-r-0 lg:border-l-custom-purple"
            : ""
        }   px-2  py-2 md:py-3 text-center md:text-left md:border-b  flex flex-col items-center md:flex-row gap-3`}
      >
        <div className="border p-2 rounded-lg bg-gray-100">
          <figure>
            <img src={image} alt="" className="h-8" />
          </figure>
        </div>
        <span className="text-[10px] md:text-xs">{name}</span>
      </div>
    </NavLink>
  );
}

export default SubCategory;
