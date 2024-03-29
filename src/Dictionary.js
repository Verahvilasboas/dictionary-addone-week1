import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
let [keyword, setkeyword] = useState ("");


function handleKeywordChange(event){
    setkeyword(event.target.value);
}

    function search(event){
    event.preventDefault(); 
alert(`searching for ${keyword}`);
}

return (
  <div className="Dictionary">
    <div className="row">
      <div className="col-3">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
      </div>
      <div className="col-3">
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  </div>
);
}
