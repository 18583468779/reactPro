import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store/index.ts";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
