import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";

function Search({ setSearchResults }) {
  const [value, setValue] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <label htmlFor="search">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </label>
  );
}

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
