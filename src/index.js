import React from 'react'
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from "./utils/ToggleColorMode";

import "./index.css"
import App from "./components/App"
import store from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ToggleColorModeProvider>
  </Provider>
);