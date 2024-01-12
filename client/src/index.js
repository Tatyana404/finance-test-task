import { Provider } from "react-redux";
import { StrictMode } from "react";
import { render } from "react-dom";
import { store } from "./store";
import App from "./App";
import "./styles.module.css";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
