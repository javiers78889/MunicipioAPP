import { useState } from 'react';
import { Navbar } from './widgets/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './widgets/Footer/Footer';
import { Inicio } from './componentes/Inicio';
import { ModalSearch } from './widgets/Footer/ModalSearch';
import { TopBar } from './widgets/Navbar/TopBar';
import './css/ModalSlider.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ModalSearch />

      
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      
    

      <Footer />


    </>
  );
}

export default App;
