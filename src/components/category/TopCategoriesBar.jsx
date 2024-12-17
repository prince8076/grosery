import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function TopCategoriesBar() {
  const mainCategoryData = useSelector((state) => state.mainCategorySlice);
  const [showDropdown, setShowDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const downRef = useRef();
  const handleWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downRef.current && !downRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);
  console.log(windowWidth);
  const visibleItemsCount = windowWidth >= 968 ? 7 : 5;
  const visibleItems = mainCategoryData.slice(0, visibleItemsCount);
  const overflowItems = mainCategoryData.slice(visibleItemsCount);

  return (
    <div
      className="hidden md:flex sticky top-[5.3rem] z-10 bg-white items-center w-full border-b h-9 shadow-md"
      ref={downRef}
    >
      <div className="w-full lg:w-[90%] px-4  lg:px-2 m-auto flex items-center  justify-between text-xs text-gray-500 w-full h-full">
        {visibleItems.map((category, index) => (
          <div className="h-full hover:bg-gray-100 flex items-center px-2">
            <TopCategory key={index} id={category.id} name={category.name} />
          </div>
        ))}

        {overflowItems.length > 0 && (
          <div
            className="relative flex hover:bg-gray-100 items-center gap-1 px-1 py-2.5"
            onClick={() => toggleDropDown()}
          >
            <span>more</span>
            {showDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

            {showDropdown && (
              <div className="absolute top-9 right-0 z-50 bg-white overflow-y-scroll w-[150px] max-h-[70vh] border ">
                {overflowItems.map((category, index) => (
                  <div className="hover:bg-gray-100 h-full flex items-center p-2  border-b ">
                    <TopCategory
                      key={index}
                      id={category.id}
                      name={category.name}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopCategoriesBar;

function TopCategory({ name, id }) {
  return (
    <NavLink to={`/cn/${name}/cid/${id}`}>
      <p>{name}</p>
    </NavLink>
  );
}
