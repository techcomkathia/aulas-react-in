import { Link } from "react-router-dom"
import "./BarraNavegacao.css";

function BarraNavegacao() {
  return (
    <nav>
        {/* O link é equivalente a tag <a>
        <a href="caminho arquivo"> Texto </a> 
        <Link to="rota do componente">Texto </link>*/}
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to='/telefones'>telefones</Link>
    </nav>
  )
}

export default BarraNavegacao