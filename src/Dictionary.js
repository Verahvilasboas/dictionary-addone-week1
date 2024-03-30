import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import icon from "./searchicon.svg";
import Results from "./Results"


export default function Dictionary(){
let [keyword, setkeyword] = useState ("");
let [results, setResults] = useState (null);


function handleResponse(response){
setResults(response.data[0]);
}

    function search(event){
      event.preventDefault();

      //documentation : https://dictionaryapi.dev/

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }


function handleKeywordChange(event) {
  setkeyword(event.target.value);
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
            onChange={handleKeywordChange}
            autoFocus={true}
            placeholder="Search"
          />
        </form>
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
