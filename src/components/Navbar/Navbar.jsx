import CarticaturaLogo from '../../assets/Logo-Atitalaquia-Caricatura.png'
import TecnmLogo from '../../assets/Logo-TECNM.png'
import SearchBar from '../SearchBar/SearchBar.component';
import './Navbar.styles.scss';

const Navbar = () => {
    return(
        <header className="navbar">
    <div className="wrap">
      <a className="brand" href="/"> 
        <div className='logos'>
          <img src={TecnmLogo} alt="TECNM" />
          
          <img src={CarticaturaLogo} alt="Logo Itat" />
        </div>
        <span> ¡Bienvenido a la Biblioteca Digital! </span>
      </a>

      <div className="nav-center">
       <SearchBar placeholder="Buscar por título o autor…" />
      </div>

      <nav className="links">
        <a href="/">Inicio</a>
        <a href="/reglamento">Reglamento</a>
      </nav>
    </div>
  </header>
    )
}

export default Navbar