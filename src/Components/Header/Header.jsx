import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import './Header.scss';

const Header = () =>{

  return (
    <header className="Header">
        <img src={logo} alt="" />
        <span><h1>Livros vai na web</h1></span>
        <nav>
            <ul className='menu'>
                <li>Inicio</li>
                <li>Livros doados</li>
                <li>Quero doar</li>
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