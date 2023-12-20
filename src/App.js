import './App.css';

import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './Components/Header/Header';
import { MainScreen } from './Components/MainScreen/MainScreen';
import { SobreMi } from './Components/SobreMi/SobreMi';
import { Skills } from './Components/Skills/Skills';
import { Proyectos } from './Components/Proyectos/Proyectos';
import { Contacto } from './Components/Contacto/Contacto';

import { ThemeProvider } from './Context/ThemeProvider';
import { ThemesContainer } from './Components/Background/ThemesContainer';
import { Certificaciones } from './Components/Certificaciones/Certificaciones';


function App() {
  
  return (
    <div className="App">
      <ThemeProvider>

      <HashRouter> 
      <ThemesContainer/>
        <Header/>
          <Routes>
            <Route path='/' element={<MainScreen/>}/>
            <Route path='/sobremi' element={<SobreMi/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/proyectos' element={<Proyectos/>}/>
            <Route path='/certificaciones' element={<Certificaciones/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
      </HashRouter>
      
    
      </ThemeProvider>
    </div>
  );
}

export default App;
