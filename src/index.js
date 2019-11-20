import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.addEventListener("close", e => {
    localStorage.removeItem("user_info");
});
ReactDOM.render(<App />, document.getElementById("root"));
