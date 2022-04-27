import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import NavbarPage from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <NavbarPage />
      <Outlet />
      <Footer />      
    </div>
  );
}

export default App;
