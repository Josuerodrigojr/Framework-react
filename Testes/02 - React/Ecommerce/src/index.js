import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { ProdutoEdit } from './pages/Produtos';
import { Home } from './pages/Home'
import { DefaultTemplate } from './pages/_templates/Default';
import ProdutoProvider from './contexts/Produtos';

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ProdutoProvider>
      <DefaultTemplate>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProdutoEdit />} />
          <Route path="/produtos/:id" element={<ProdutoEdit />} />

        </Routes>
      </DefaultTemplate>
    </ProdutoProvider>
  </BrowserRouter>
);
