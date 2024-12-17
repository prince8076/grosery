import React from "react";
import SearchResult from "../Search/SearchResult";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
import NavbarSearch from "../../components/header/navbar/navbarSearch";

const Search = () => {
  return (
    <>
      <NavbarSearch />
      <SearchResult />
      <ScrollToTop />
    </>
  );
};

export default Search;
