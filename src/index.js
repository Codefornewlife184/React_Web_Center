import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import 'jquery.easing';
import App from "./App";
import "./i18n";

// jQuery'yi global olarak tanımla
window.$ = window.jQuery = $;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
