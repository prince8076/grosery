import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryCard = ({ name, image_full_url, id }) => (
  <NavLink to={`/cn/${name}/cid/${id}`}>
    <div className="flex flex-col gap-1 justify-between text-center py-2 mx-auto">
      {/* Fixed size for the image container with reduced gap */}
      <div className="bg-pink-50 rounded-xl p-2  shadow-lg mx-auto flex items-center justify-center ">
        <img
          src={image_full_url}
          alt={name}
          onError={(e) => {
            e.target.src = "fallback-image-url.png";
          }}
          className=" object-cover object-center rounded-lg "
        />
      </div>
      {/* Fixed height for text container */}
      <div className="text-container h-[30px] flex items-center justify-center">
        <p className="text-[8px] md:text-xs lg:text-sm text-gray-500 text-center truncate">
          {name}
        </p>
      </div>
    </div>
  </NavLink>
);

const MainCategoryContainer = () => {
  const mainCategoryData = useSelector((state) => state.mainCategorySlice);

  return (
    <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
      {mainCategoryData.map((category, index) => (
        <CategoryCard
          key={index}
          name={category.name}
          id={category.id}
          image_full_url={category.image_full_url}
        />
      ))}
    </div>
  );
};

export default MainCategoryContainer;
