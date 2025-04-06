import './bootstrap';

import { AuthProvider } from './components/AuthContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //追加(ルーター読み込み)
import MyPosts from './components/MyPosts';

const container = document.getElementById("app");
const root = createRoot(container);


root.render(
    <AuthProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<MyPosts />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);