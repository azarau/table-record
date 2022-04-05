import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Table />
  </StrictMode>,
  rootElement
);
