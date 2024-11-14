import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () =>{

  return (
    <header className="Header">
      <div className='title'>
      <img src={logo} alt="" />
      <h1>Livros vai na web</h1>
      </div>
        <nav>
            <ul className='menu'>
            <Link to="/">Inicio</Link>
            <Link to="./Doados">Livros doados</Link>
            <Link to="./QueroDoar">Quero doar</Link>
            </ul>
        </nav>
        <div className='search'>
              <input type="text" placeholder='O que você procura?'/>
              <img src={search} alt="" />
            </div>
    </header>
  )
}

export default Header