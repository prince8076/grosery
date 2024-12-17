import React from "react";
import SubCategory from "./UI/SubCategory";
import { useSelector } from "react-redux";
function SubCategorySidbar() {
  const mainCategoryData = useSelector((state) => state.mainCategorySlice);
  return (
    <div className="no-scrollbar h-[calc(100vh-8rem)] shrink-0  overflow-y-scroll  w-24 md:w-40 lg:w-60 flex flex-col">
      {mainCategoryData.map((item) => {
        return (
          <SubCategory
            key={item.id}
            name={item.name}
            image={item.image_full_url}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default SubCategorySidbar;
