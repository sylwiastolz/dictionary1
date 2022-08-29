import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <section key={index}>
                <Phonetic phonetic={phonetic} />
              </section>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
