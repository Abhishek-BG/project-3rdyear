import { StrictMode, useTransition } from 'react'
import { createRoot } from 'react-dom/client'
import {useRef, useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import './main.css'
import Header from './components/common/header'
import MainContent from './components/common/mainContent';
const root = document.getElementById('root');
import Register from './components/common/register';
import AdminDash from './components/adminUi/adminDash';
import AddMovie from  './components/adminUi/addMovie';
import AddGenre from  './components/adminUi/addGenre';
createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/dashboard" element={<AdminDash/>} />
         <Route path="/signup" element={<Register/>} />
          <Route path="/add-movie" element={<AddMovie/>} />
           <Route path="/add-genre" element={<AddGenre/>} />
    </Routes>

  </BrowserRouter>
)



