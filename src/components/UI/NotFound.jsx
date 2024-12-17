import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { showAddressForm } from "../../store/reducer/selectAddessSlice";
import { useDispatch, useSelector } from "react-redux";
import NewAddressCard from "../addresspage/NewAddressCard";

function NotFound({ image, title, path, description, pathTitle }) {
  const { addressForm } = useSelector((state) => state.selectAddressSlice);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  console.log(pathname);
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center rounded-lg">
        <figure>
          <img src={image} alt="empty-cart" className="w-44" />
        </figure>
        <div className="flex flex-col items-center">
          <p className="text-[15px] font-bold">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <div className="my-5">
          {!pathname == "/account/address" ? (
            <NavLink
              className="text-white text-sm bg-custom-purple px-2 py-3 rounded-lg"
              to={pathname}
            >
              {pathTitle}
            </NavLink>
          ) : (
            <button
              className="text-white text-sm bg-custom-purple px-2 py-3 rounded-lg"
              onClick={(e) => dispatch(showAddressForm())}
            >
              {pathTitle}
            </button>
          )}
        </div>
      </div>

      {addressForm && <NewAddressCard />}
    </>
  );
}

export default NotFound;
