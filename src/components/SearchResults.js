import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <>
      {results.map((image) => (
        <img key={image} className="cardImage" src={image} alt="space-img" />
      ))}
    </>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};
