import React from "react";

const Search = ({searchHandler}) => {
  return (
    <div>
      <h2>- Search -</h2>
      <input onChange={searchHandler} placeholder="Find a todo" type='search'/>
    </div>
  );
};

export default Search;
