import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; //bdcb
import { Provider } from "react-redux";
import counterStore from "./Store/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
