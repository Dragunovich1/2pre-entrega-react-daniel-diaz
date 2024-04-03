import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import MainContent from './components/MainContent';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return(  
  <>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<MainContent/>}/>
    <Route path="/products" element={<ItemListContainer/>}/>
    <Route path="/category/:id" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
  </Routes>
  </BrowserRouter>
  <Footer />
  </>
  );
}

export default App