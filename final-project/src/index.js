import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserContext";
import { HelmetProvider } from "react-helmet-async";
import WishListProvider from "./Context/WishListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <WishListProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </WishListProvider>
    </UserProvider>
  </React.StrictMode>
);
