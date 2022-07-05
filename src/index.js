import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./assets/boxicons/css/boxicons.min.css";
import "./styles/index.scss";
// Import Swiper styles
import "swiper/swiper.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
