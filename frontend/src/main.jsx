import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {  AuthContextProvider } from './context-api/AuthContext.jsx';
import {  SocketContextProvider } from './context-api/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
