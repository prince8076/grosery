import { Link } from "react-router-dom";

// Logobtn
function Logo(){
    return (
      <Link to="/" className="logo   ">
        <img
          className="logo_img h-[30px] sm:h-[35px] md:h-[48px] w-auto md:mb-0  "
          src="/images/app/navbar/grocekart_logo.png"
          alt="Logo"
        />
      </Link>
    );
  }

export default Logo;