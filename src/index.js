/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
 import "react-app-polyfill/ie11";
 import "react-app-polyfill/stable";
 import React from "react";
 import ReactDOM from "react-dom/client";
 import axios from "axios";
 import * as _redux from "./redux";
 import store, { persistor } from "./redux/store";
 import reportWebVitals from "./utils/reportWebVitals";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap-social/bootstrap-social.css';
 import App from "./app/App";
 import "./index.css";
 
 /**
  * Base URL of the website.
  *
  * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
  */
 const { PUBLIC_URL } = process.env;
 
 /**
  * Creates `axios-mock-adapter` instance for provided `axios` instance, add
  * basic Theme mocks and returns it.
  *
  * @see https://github.com/ctimmerm/axios-mock-adapter
  */
 /* const mock = */
 
 /**
  * Inject theme interceptors for axios.
  *
  * @see https://github.com/axios/axios#interceptors
  */
 _redux.setupAxios(axios, store);
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App store={store} persistor={persistor} basename={PUBLIC_URL} />
   </React.StrictMode>
 );

 reportWebVitals();
 