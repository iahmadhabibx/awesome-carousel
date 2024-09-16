import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      items={[
        "Type 1",
        8678,
        <p>Type 3</p>,
        <p>Type 4</p>,
        <p>Type 5</p>,
        <p>Type 6</p>,
        <p>Type 7</p>,
        <p>Type 8</p>,
        <p>Type 9</p>,
        <p>Type 10</p>,
        <p>Type 11</p>,
        <p>Type 12</p>,
        <p>Type 13</p>,
        <p>Type 14</p>,
      ]}
      boxShadowType="medium"
    />
  </React.StrictMode>
);

reportWebVitals();
