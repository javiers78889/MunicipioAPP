import { Navbar } from './widgets/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './widgets/Footer/Footer';
import { Inicio } from './componentes/Inicio';
import { ModalSearch } from './widgets/Footer/ModalSearch';
import { TopBar } from './widgets/Navbar/TopBar';
import { Municipio } from './componentes/Municipio';
import { Servicios } from './componentes/Servicios';
import { Noticias } from './componentes/Noticias';
import { Tramites } from './componentes/Tramites';
import { Turismo } from './componentes/Turismo';
import { Preguntas } from './componentes/Preguntas';
import { Comercios } from './componentes/Comercios';
import { Transparencia } from './componentes/Transparencia';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ModalSearch />

      
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/municipio' element={<Municipio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/turismo' element={<Turismo />} />
          <Route path='/tramites' element={<Tramites />} />
          <Route path='/preguntas' element={<Preguntas />} />
          <Route path='/comercios' element={<Comercios />} />
          <Route path='/transparencia' element={<Transparencia />} />
        </Routes>
      
    

      <Footer />


    </>
  );
}

export default App;
