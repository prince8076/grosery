import { useDispatch, useSelector } from "react-redux";
import { generalActions, generalSelector } from "../../../../store/reducer/generalSlice";



//Login btn
function LoginBtn() {
    const dispatch = useDispatch();
    const { windowWidth, loginState } = useSelector(generalSelector);
  
    const LoginText = () => (
      <p className=" text-xs text-custom-purple sm:text-[15px] md:text-lg w-16 md:w-20 ]">
        Login
      </p>
    );
  
    const AccountText = () => (
      <>
        <p className=" text-[10px] sm:text-xs md:text-sm  whitespace-nowrap]">
          My Account
        </p>
        <img
          src="/images/app/navbar/arrowdown.png"
          alt="arrow_down"
          className=""
        />
      </>
    );
  
    const ProfileIcon = () => (
      <img
        className="profile_icon h-[35px] ms-2"
        src="/images/app/navbar/profile_icon.png"
        alt="profile icon"
      />
    );
  
    function handleLoginbtn() {
      dispatch(generalActions.setLoginState(true));
    }
  
    return (
      <button
        onClick={() => handleLoginbtn()}
        className={` login-account_btn_container${
          windowWidth > 640
            ? loginState
              ? "bg-white text-black border-gray-300 ps-3 pe-2"
              : "text-custom-purple border-custom-purple px-1"
            : ""
        } ${
          windowWidth > 640
            ? "h-[35px] md:h-custom-57 border rounded-[8px] py-2 flex items-center gap-1 justify-center text-lg"
            : ""
        }`}
      >
        {windowWidth <= 640 ? (
          <ProfileIcon />
        ) : loginState ? (
          <AccountText />
        ) : (
          <LoginText />
        )}
      </button>
    );
  };

  export default LoginBtn;