import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults.js";

export default function Dictionary(props) {
  let [searchText, setSearchText] = useState(props.defaultSearchText);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchText}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchTextChange(event) {
    // event.preventDefault();
    setSearchText(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1> What word will you like to search for?</h1>
          <form>
            <input
              onSubmit={handleSubmit}
              type="search"
              onChange={handleSearchTextChange}
              defaultValue={props.defaultSearchText}
            />
          </form>
        </section>
        <SearchResults results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
