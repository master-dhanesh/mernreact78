import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Context>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        </Context>
    </Provider>
);
