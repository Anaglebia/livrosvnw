import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import './Header.scss';
// import Routes from '../../routes';
// import { Link } from 'react-router-dom';

const Header = () =>{

  return (
    <header className="Header">
      <div className='title'>
      <img src={logo} alt="" />
      <h1>Livros vai na web</h1>
      </div>
      {/* <Routes>  */}
        <nav>
            <ul className='menu'>
            
            {/* <Link to="/sobre">Inicio</Link> */}
                <li><a href=""></a></li>
                <li><a href="">Livros doados</a></li>
                <li><a href="">Quero doar</a></li>
            </ul>
        </nav>
        {/* </Routes> */}
        <div className='search'>
              <input type="text" placeholder='O que você procura?'/>
              <img src={search} alt="" />
            </div>
       
    </header>
  )
}

export default Header