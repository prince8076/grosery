import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../productcard/ProductCard";
import Loader from "../UI/Loader";

function ProductContainer() {
  const { subID } = useParams();
  const [subCategory, setSubCategory] = useState({});
  const [loader, setLoader] = useState(false);
  const mainCategoryData = useSelector((state) => state.mainCategorySlice);

  useEffect(() => {
    setLoader(true);

    const timeoutId = setTimeout(() => {
      const categoryData = mainCategoryData.find(
        (cat) => cat.id === parseInt(subID)
      );
      if (categoryData) {
        setSubCategory(categoryData);
        setLoader(false);
      }
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [subID]);

  if (loader) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="text-3xl text-custom-purple" />
      </div>
    );
  }
  return subCategory.childes && subCategory.childes.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 bg-gray-100 p-1">
      {subCategory.childes.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <figure>
          <img src="/images/noProduct.webp" alt="" className="h-24" />
        </figure>
        <div>
          <p className="text-gray-700">sorry! items not found</p>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCoUtOal33JWLqals1Wq7p6GGCnr3o-lwpQ&s
{
  /* <Product key={data.id} data={data} /> */
}
