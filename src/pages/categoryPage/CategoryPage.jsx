import React, { useEffect } from "react";
import SubCategorySidbar from "../../components/category/SubCategorySidbar";
import TopSortBar from "../../components/category/TopSortBar";
import ProductContainer from "../../components/category/ProductContainer";
import TopCategoriesBar from "../../components/category/TopCategoriesBar";
import { useLocation } from "react-router-dom";
import PageWapper from "../../components/wrapper/PageWapper";
function CategoryPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      {window.innerWidth > 768 ? <TopCategoriesBar /> : <TopSortBar />}
      <PageWapper>
        <div className="md:border md:border-t-0 w-full h-full mx-auto flex">
          <SubCategorySidbar />
          <div className="w-full no-scrollbar border-l h-[calc(100vh-8rem)] overflow-y-scroll">
            {window.innerWidth > 768 && <TopSortBar />}
            <div className="h-full">
              <ProductContainer />
            </div>
          </div>
        </div>
      </PageWapper>
    </div>
  );
}

export default CategoryPage;
