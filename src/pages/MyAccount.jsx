import React from "react";
import { PiMapPinArea } from "react-icons/pi";
import { MdListAlt } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

function MyAccount() {
  return (
    <div className="lg:mx-20 ">
      <h3 className="mb-4 mt-2 text-[23px] font-[600] md-max:text-[10px] md-max:font-[600]">
        My Account
      </h3>
      <div className="flex h-screen border border-account-full_shadow">
        <div className="w-1/5 border border-account-aside_shadow">
          <div className="flex items-center justify-evenly px-5 py-4 mb-4 shadow">
            <div className="w-10 h-10">
              <img src="/images/account-assets/profile.png" alt="profile" />
            </div>
            <div>
              <p className="text-gray-800">+91234567890</p>
            </div>
          </div>
          <nav className="space-y-4">
            <NavLink
              to="address"
              className={({ isActive }) =>
                `flex items-center justify-start pl-4 mx-4 py-2 space-x-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "bg-transparent text-gray-700"
                }`
              }
            >
              <PiMapPinArea className="w-5 h-5" />
              <span>My Address</span>
            </NavLink>
            <NavLink
              to="order"
              className={({ isActive }) =>
                `flex items-center justify-start pl-4 mx-4 py-2 space-x-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "bg-transparent text-gray-700"
                }`
              }
            >
              <MdListAlt className="w-5 h-5" />
              <span>My Orders</span>
            </NavLink>
            <NavLink
              to="wallet"
              className={({ isActive }) =>
                `flex items-center justify-start pl-4 mx-4 py-2 space-x-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "bg-transparent text-gray-700"
                }`
              }
            >
              <HiOutlineCurrencyRupee className="w-5 h-5" />
              <span>My Wallet</span>
            </NavLink>
            <NavLink
              to="privacy"
              className={({ isActive }) =>
                `flex items-center justify-start pl-4 mx-4 py-2 space-x-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "bg-transparent text-gray-700"
                }`
              }
            >
              <MdOutlinePrivacyTip className="w-5 h-5" />
              <span>Account Privacy</span>
            </NavLink>
            <NavLink
              to="logout"
              className={({ isActive }) =>
                `flex items-center justify-start pl-4 mx-4 py-2 space-x-2 rounded ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "bg-transparent text-gray-700"
                }`
              }
            >
              <RiLogoutCircleLine className="w-5 h-5" />
              <span>Logout</span>
            </NavLink>
          </nav>
        </div>
        <div className="w-4/5 lg:">{/* <Outlet /> */}</div>
      </div>
    </div>
  );
}

export default MyAccount;
