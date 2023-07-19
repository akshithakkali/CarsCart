import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-tplb65x2rvmdrbiu.us.auth0.com"
    clientId="aKIOw3qZ346M84NqznKj8JpBUKPMyocB"
    redirectUri={window.location.origin} 
    // authorizationParams={{
    //   redirect_uri: window.location.origin
    // }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
