import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { generalActions, generalSelector, } from "../../store/reducer/generalSlice";
import ProductCard from "../../components/productcard/ProductCard";

function SearchResult() {
  let timeout = null;
  const dispatch = useDispatch();
  const { windowWidth, searchItems, loading, searchQuery, recentSearches, recommendations, } = useSelector(generalSelector);
  const [searchParam, setSearchParam] = useSearchParams();
  const [notFound, setNotFound] = useState(false)
  // const observer = useRef();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(generalActions.setSearchQuery(searchParam.get("sq") || ""));
    return () => {
      dispatch(generalActions.setSearchQuery(""))
    }
  }, []);

  useEffect(() => {
    setSearchParam(
      (prev) => {
        prev.set("sq", searchQuery);
        return prev;
      },
      { replace: true }
    );

    dispatch(generalActions.setSearchItems([]));
    dispatch(generalActions.setRecommendations([]));

    if (searchQuery) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        dispatch(generalActions.fetchSearchData(searchQuery));

        dispatch(generalActions.addRecentSearch(searchQuery));
        // dispatch(generalActions.setPage(1));
      }, 1000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [searchQuery]);

  useEffect(() => {
    if (searchItems.length == 0 && searchQuery && !loading) {
      setNotFound(true)
    }
    else {
      setNotFound(false)
    }
  }, [loading])


  // const lastItemElementRef = useCallback(
  //     (node) => {
  //         if (loading) return;
  //         if (observer.current) observer.current.disconnect();
  //         observer.current = new IntersectionObserver((entries) => {
  //             if (entries[0].isIntersecting && hasMore) {
  //                 dispatch(generalActions.fetchSearchData({ searchText: searchQuery, page: currentPage + 1 }));
  //                 dispatch(generalActions.setPage(currentPage + 1));
  //             }
  //         });
  //         if (node) observer.current.observe(node);
  //     },
  //     [loading, hasMore, searchQuery, currentPage]
  // );

  return (
    <>
      {notFound ?
        (<div className="w-full min-h-[80lvh] flex flex-col justify-center align-middle">
          <div className="flex flex-col items-center justify-center">
            <img className="w-96" src={"/images/noProduct.webp" || "/images/dummy_img.png"} alt="No Product" />
            <p className="text-center text-xl md:text-2xl font-semibold text-[#b8b8b8]">No Product Found!</p>
          </div>
        </div>)
        :
        (<div
          className={`w-full flex flex-col items-center text-gray-700 ${windowWidth < 900 ? "px-1 pt-2" : "px-20 mt-4"
            } min-h-screen`}
        >
          {/* Recent searches section */}
          {!searchQuery && (
            <div className="w-full p-2">
              {recentSearches.length > 0 && (
                <div className="w-full flex justify-between">
                  <h2 className="text-base font-semibold mt-2">Recent Searches</h2>
                  <button
                    className="text-gray-700 text-sm px-3 py-1 rounded-lg m-1"
                    onClick={() =>
                      dispatch(generalActions.clearRecentSearch(searchItems))
                    }
                  >
                    <RiCloseCircleFill
                      size={28}
                      title="clear recent"
                      color={"#8E0F5D"}
                    />
                  </button>
                </div>
              )}
              <div>
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-md m-1"
                    onClick={() => dispatch(generalActions.setSearchQuery(search))}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations section based on windowWidth */}
          {searchQuery && recommendations.length > 0 && (
            <div className="w-full">
              {windowWidth < 900 ? (
                // Mobile recommendations
                <div className="flex flex-col items-start w-full">
                  {recommendations.map((recommend, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white rounded-lg px-2 w-full"
                      onClick={() =>
                        dispatch(generalActions.setSearchQuery(recommend.name))
                      }
                    >
                      <img
                        src={
                          recommend.img ||
                          recommend.image_full_url ||
                          "/images/dummy_img.png"
                        }
                        alt={recommend.name}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div className="ml-2 flex flex-col justify-between">
                        <span className="text-sm text-left text-gray-600 font-semibold">
                          {recommend.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Non-mobile recommendations
                <div className="flex flex-wrap">
                  {recommendations.map((recommend, index) => (
                    <button
                      key={index}
                      className="bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-md m-1"
                      onClick={() =>
                        dispatch(generalActions.setSearchQuery(recommend.name))
                      }
                    >
                      {recommend.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {searchQuery && (
            <div className="w-full text-left flex flex-col">
              <h2 className="sm:text-md md:text-xl lg:text-xl font-semibold ps-4 lg:ps-1 mt-4 mb-2">
                Showing Results for "{searchQuery}"
              </h2>
            </div>
          )}

          {/* Products section */}
          <div className="w-full flex justify-center">
            {searchQuery && loading ? (
              <div className="flex justify-center items-center min-h-[80vh]">
                <img src="loader.gif" alt="Loading..." className="w-16 h-16" />
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full ${windowWidth < 600 ? "gap-2 max-w-none w-full px-2" : "gap-3 px-4"
                  } py-4`}
              >
                {searchQuery &&
                  searchItems &&
                  searchItems.map((item, index) => (
                    <ProductCard key={index} product={item} />
                  ))}
              </div>
            )}
          </div>
        </div>)
      }
    </>

  );
}

export default SearchResult;
