import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "typeface-roboto";
import reportWebVitals from "./reportWebVitals";
import "./Bootstrap.scss";
import "./index.css";

// eslint-disable-next-line
// import "swiper/css/bundle";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
