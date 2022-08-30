import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <SWRConfig
       value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </>
);
