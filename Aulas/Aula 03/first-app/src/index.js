import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './Cadastro'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const Home = () => {
  return <>
  <span><h1>Home Page</h1> </span>
  </>
}

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/app" element={<App />}/>

    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
