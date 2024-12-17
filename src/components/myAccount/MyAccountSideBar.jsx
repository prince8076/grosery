import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLocationOutline, IoReorderFourSharp } from "react-icons/io5";
import { PiCurrencyInrFill } from "react-icons/pi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { RiUserSettingsFill } from "react-icons/ri";
function MyAccountSideBar() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const confirmLogout = () => {
    navigate("/");
  };

  const cancelLogout = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="profile-nav border-r hidden md:flex flex-col w-[200px]">
        <div className="profile-nav_details p-3">+9100000000</div>
        <nav className="profile-nav_list block flex flex-col text-[15px]">
          <NavLink
            to="address"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <IoLocationOutline />
            <p>My Address</p>
          </NavLink>
          <NavLink
            to="order"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <IoReorderFourSharp />
            <p>My Orders</p>
          </NavLink>
          <NavLink
            to="wallet"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <PiCurrencyInrFill />
            <p>My Wallet</p>
          </NavLink>
          <NavLink
            to="privacy"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <MdOutlinePrivacyTip />
            <p>Account Privacy</p>
          </NavLink>

          <NavLink
            to="profile"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <RiUserSettingsFill />
            <p>Profile Setting</p>
          </NavLink>
          <NavLink
            to="ordertrack"
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100"
          >
            <RiUserSettingsFill />
            <p>Track Order</p>
          </NavLink>

          <div
            onClick={handleLogoutClick}
            className="flex items-center gap-2 border-b p-3 hover:bg-pink-100 cursor-pointer"
          >
            <CiLogout />
            <p>Logout</p>
          </div>
        </nav>
      </div>

      {showPopup && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <p>Are you sure you want to log out?</p>
            <button onClick={confirmLogout} style={buttonStyles}>
              Yes
            </button>
            <button onClick={cancelLogout} style={cancelButtonStyles}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const popupStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const popupContentStyles = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
};

const buttonStyles = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#8E0F5D",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
};

const cancelButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#ccc",
};

export default MyAccountSideBar;
