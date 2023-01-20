import { KeyboardEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
("use strict");

function RenderApp() {
  const keyup = (event: KeyboardEvent): void => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    if (event.key === "Enter") {
      const inputMessage = getInput("new-input");
      console.log(inputMessage, inputMessage.length);

      //console.log(getInput("new-input"));
      //console.log(getInput("new-input").length);
    }
  };

  return (
    <header className="header">
      <h1>TODOs</h1>
      <input
        onKeyUp={keyup}
        className="new-todo"
        placeholder="What needs to be done?"
        id="new-input"
      ></input>
    </header>
  );
}

export default RenderApp;

function getInput(elemetnId: string): string {
  let input = (
    document.getElementById(elemetnId) as HTMLInputElement
  ).value.trim();

  (document.getElementById(elemetnId) as HTMLInputElement).value = "";

  return input;
}
