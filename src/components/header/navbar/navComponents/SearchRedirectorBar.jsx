import { Link } from "react-router-dom";





// SearchRedirectBar
function SearchRedirectBar ()  {
    return (
      <Link
        to="/search"
        className={`SearchRedirectBar_container flex gap-1 p-3  bg-[#F8F8F8] items-center rounded-[13px] flex-grow h-[40px] 
          sm:h-custom-57 border-[1px] border-[#EEEEEE]'`}
      >
        <img
          className="search_icon ms-2 h-3 sm:h-[16px]"
          src="/images/app/navbar/searchIcon.png"
          alt="Search Icon"
        />
        <p
          className={`search_placeholder flex-grow ms-1 bg-transparent text-xs sm:text-[13px] text-gray-600 focus:outline-none `}
        >
          {" "}
          Search for "vegetables"
        </p>
      </Link>
    );
  };

  export default SearchRedirectBar;