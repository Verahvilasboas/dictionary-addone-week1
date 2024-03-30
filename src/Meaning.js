import React from "react";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3> {props.meaning.partofSpeech} </h3>
    <p>  {props.meaning.definition[0].definition}  </p>
      </div>
    );
}