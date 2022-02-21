import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchText, setSearchText] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);

    setResults(response.data[0]);
  }
  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
    console.log(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchText}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <section>
        <h1> What word will you like to search for?</h1>
        <form onSubmit={search}>
          <input type="search" onChange={handleSearchTextChange} />
        </form>
      </section>
      <SearchResults results={results} />
    </div>
  );
}
