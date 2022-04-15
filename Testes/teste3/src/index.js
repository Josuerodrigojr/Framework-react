import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {Teste} from './teste'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}/>
  <Route path="/teste" element={<Teste />}/>
  <></>
  </Routes>
  </BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
