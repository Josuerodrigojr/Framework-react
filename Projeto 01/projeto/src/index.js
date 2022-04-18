import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./home";
import { Teste } from "./teste2";
import {Erro} from './Erro'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Template } from "./template";
import ProdutoProvider from "./variaveis";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProdutoProvider>
      <Template>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<App />} />
          <Route path="/produto" element={<Teste />} />
          <Route path="/produto/:id" element={<Teste />} />
          <Route path="/produto/0" element={<Erro />} />
        </Routes>
      </Template>
    </ProdutoProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
