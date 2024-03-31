import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
import icon from "./searchicon.svg";


export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="row">
        <div className="col-6">
          <img src={icon} className="icon img-fluid" alt="icon" />
        </div>
        <div className="col-7">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </div>
        <div className="col-7">
          <p>
            <Results results={results} />
          </p>
        </div>
      </div>
    </div>
  );
}
