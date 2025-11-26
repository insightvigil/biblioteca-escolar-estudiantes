import CarticaturaLogo from '../../../assets/Logo-Atitalaquia-Caricatura.png'
import TecnmLogo from '../../../assets/Logo-TECNM.png'
import SearchBar from '../SearchBar/SearchBar.component';
import './Navbar.styles.scss';
import { Link } from 'react-router';
const Navbar = () => {
    return(
    <header className="navbar">
    <div className="wrap">
      <Link className="brand" to='/'> 
        <div className='logos'>
          <img src={TecnmLogo} alt="TECNM" />
          
          <img src={CarticaturaLogo} alt="Logo Itat" />
        </div>
        <span> ¡Bienvenido al Catálogo Digital! </span>
      </Link>

      <div className="nav-center">
       <SearchBar placeholder="Buscar por título o autor…" />
      </div>

      <nav className="links">
        <Link to="/">Inicio</Link>
        <Link to="https://elibro.net/es/lc/itatitalaquia/login_usuario/?next=/es/lc/itatitalaquia/inicio/">Libros Digitales</Link>
        <Link to="https://cursos.itatitalaquia.edu.mx/">Moodle</Link>
        <Link to="http://201.132.29.146/">SII</Link>
        <Link to="/reglamento">Reglamento</Link>
        
        
        
      </nav>
    </div>
  </header>
    )
}

export default Navbar