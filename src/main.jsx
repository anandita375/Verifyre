import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Verify from "./verify.jsx";
import Result from "./result.jsx";

const path = window.location.pathname;

let Page = App;

if (path === "/verify") {
  Page = Verify;
}

if (path === "/result") {
  Page = Result;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);