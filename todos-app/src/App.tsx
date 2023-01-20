import { KeyboardEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
("use strict");

function RenderApp() {
  const keyup = (event: KeyboardEvent): void => {
    //console.log(event);

    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    if (event.key === "Enter") {
      console.log("Test Message");
    }
  };

  return (
    <header className="header">
      <h1>TODOs</h1>
      <input
        onKeyUp={keyup}
        className="new-todo"
        placeholder="What needs to be done?"
      ></input>
    </header>
  );
}

export default RenderApp;
