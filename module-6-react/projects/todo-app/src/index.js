import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ReduxAppProvider } from "./contexts/ReduxAppContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./redux/tasksReducer";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ReduxAppProvider>
          <App />
        </ReduxAppProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
