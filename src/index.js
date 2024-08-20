import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Get the root element from the DOM
const container = document.getElementById("root");

// Create a root using React 18's createRoot API
const root = createRoot(container);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
