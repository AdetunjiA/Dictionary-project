import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults.js";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [searchText, setSearchText] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response);

    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
    console.log(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchText}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000011207767ff7b44667ac34fcab841cb30e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchText}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
