import React from "react";

function ProductDescriptionFrontImage({ frontImg }) {
  return (
    <div className="flex justify-center h-[250px] sm:h-[400px]">
      <img src={frontImg} alt="" className="object-cover h-full w-fit " />
    </div>
  );
}

export default ProductDescriptionFrontImage;
