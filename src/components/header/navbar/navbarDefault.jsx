import { Link } from "react-router-dom";
import Login from "../../logIn/login";
import {  useSelector } from "react-redux";
import {generalSelector} from "../../../store/reducer/generalSlice";
import CartPopup from "../../cart/CartPopup";
import { FaArrowLeftLong } from "react-icons/fa6";
import DeliveryNotice from "./navComponents/DeliveryNotice.jsx";
import SearchRedirectBar from "./navComponents/SearchRedirectorBar.jsx";
import LoginBtn from "./navComponents/LoginBtn.jsx";
import MyCartBtn from "./navComponents/MyCartBtn.jsx";
import Logo from "./navComponents/Logo.jsx";


function NavbarDefault() {
  const { windowWidth, loginState, cartState } = useSelector(generalSelector);

  return (
    <>
      <div
        className={`navbar_container ${
          windowWidth < 995 ? "h-auto gap-3" : " z-30 shadow-custom-lg"
        }
       flex flex-col w-full items-center justify-evenly py-[17px] gap-1 bg-white sticky top-0 border-b-[1px] border-gray-300 z-30`}
      >
        <div
          className={`navbar_top flex w-full ${
            windowWidth <= 640 ? `items-start` : `items-center`
          } justify-evenly gap-1 sm:gap-6 md:gap-7 2xl:gap-11 border-gray-300 px-4 md:px-6`}
        >
          {windowWidth > 640 ? (
            <Link to="/">
              <Logo/>
            </Link>
          ) : (
            <FaArrowLeftLong
              title="Home"
              size={18}
              className="mt-3 ms-[1px] me-4"
              color="gray"
              onClick={() => window.history.go(-1)}
            />
          )}
          <DeliveryNotice />
          {windowWidth > 995 && <SearchRedirectBar wid={``} />}
          {windowWidth > 640 ? (
            <>
              <LoginBtn />
              <MyCartBtn/>
            </>
          ) : (
            <>
              <MyCartBtn />
              <LoginBtn />
            </>
          )}
        </div>
        {windowWidth <= 995 && (
          <div
            className={`navbar_bottom w-full flex flex-row-reverse items-center px-4 md:px-6`}
          >
            {windowWidth <= 995 && <SearchRedirectBar wid={`w-11/12`} />}
          </div>
        )}
      </div>
      {loginState && (
        <div className="login_popup_container fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login />
        </div>
      )}
      {cartState && (
        <div className="cart_popup_container fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50 overflow-y-scroll">
          <CartPopup />
        </div>
      )}
    </>
  );
}



export default NavbarDefault;
