import './App.css';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom'

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Contatos from './Pages/Contatos';
import PagNaoEncontrada from './Pages/PagNaoLocalizada';
import LivroDetalhes from './Pages/LivroDetalhes';
import LivrosLista from './Pages/LivrosLista';


function App() {
  return (    
    <div className="App">
      <BrowserRouter>
        {/* Componente que guarda os Links */}
        <BarraNavegacao/>

        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>

            {/* Redirecionamento de paginas  */}
            <Route path='/telefones' element={<Navigate to='/contatos'/>}/>
            <Route path='/contatos' element={<Contatos/>}/>
             {/* página não encontrada */}            
            <Route path='*' element={<PagNaoEncontrada/>}/>
            
            <Route path="/listaLivros" element={<LivrosLista/>} />
            <Route path="/livro/:id" element={<LivroDetalhes />} />
   
        </Routes>

        {/* Outlet representa a pagina atual
        renderizada. É util para criar um
        componente de layout padrão que irá
        renderizar em qualquer rota. */} 
        <Outlet/>
        
      </BrowserRouter>
      
            
    </div>
  );
}

export default App;
