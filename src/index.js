import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import FormikForm from "./FormikForm";

import "./index.css";
import Uncontrolled from "./Uncontrolled";

function App() {
  return <FormikForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
