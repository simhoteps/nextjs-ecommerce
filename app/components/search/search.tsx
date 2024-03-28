import React from "react";
import style from "./style.module.css";
import { LuSearch } from "react-icons/lu";

const SearchComponent = () => {
  return (
    <div className={style.searchBox}>
      <input
        className={style.searchInput}
        type="text"
        name=""
        placeholder="Search"
      />
      <button className={style.searchButton}>
        <LuSearch size={24} />
      </button>
    </div>
  );
};

export default SearchComponent;
