import React from "react";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3> {props.meaning.partOfSpeech} </h3>
        <p> {props.meaning.definition[0].definition} </p>
        <p> {props.meaning.definition[0].example} </p>
      </div>
    );
}