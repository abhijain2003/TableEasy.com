import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import Land from "./LandingPage/Land";
import { Routes, Route } from "react-router-dom";
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
,
  document.getElementById('root')
);