import React from "react";
import ReactDom from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import css from './App.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
    <Router>
      <ContextProvider>

      <App />
    </ContextProvider>
    </Router>

  </React.StrictMode>
)