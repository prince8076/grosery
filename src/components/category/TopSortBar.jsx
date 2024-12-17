import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router-dom";

function TopSortBar() {
  const { name } = useParams();
  const [selectedOption, setSelectedOption] = useState("Most Relevant");
  const [active, setActive] = useState(false);
  const downRef = useRef(null);
  const sortType = [
    "Most Relevant",
    "Low to High",
    "High to Low",
    "A to Z",
    "Z to A",
  ];
  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    setActive(false);
  };
  const onClickHandleSort = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downRef.current && !downRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border border-t-0 h-12 flex flex-row items-center justify-between gap-5 px-4 md:px-5 w-full ">
      <div className="text-[12px] font-bold text-gray-600">
        <p>Buy {name} Online</p>
      </div>
      <div
        className="hidden relative md:flex items-center  gap-2 text-xs"
        ref={downRef}
      >
        <div className="w-full flex items-center slef-start justify-end gap-2">
          <p className="  text-gray-500 text-[10px]">Sort By</p>

          <div
            className="border w-[200px] p-2 rounded flex justify-between"
            onClick={onClickHandleSort}
          >
            <p className="text-[10px] text-custom-purple font-semibold">
              {selectedOption}
            </p>
            {active ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
        </div>
        {active && (
          <div className="absolute top-[34px] right-0  w-[200px] flex flex-col z-10 border bg-white">
            {sortType.map((type) => (
              <label
                className={`${
                  selectedOption === type &&
                  "text-custom-purple accent-custom-purple"
                } border border-b flex gap-1 p-2 hover:bg-gray-50 text-[10px]`}
              >
                <input
                  type="radio"
                  value={type}
                  checked={selectedOption === type}
                  onChange={handleSortChange}
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopSortBar;
