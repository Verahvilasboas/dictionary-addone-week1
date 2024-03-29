import React, {useState} from "react";
import "./Dictionary.css"
import iconsearch from "./"

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
      <div className="col-12">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  </div>
);
}
