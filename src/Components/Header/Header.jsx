
import './Header.scss';

const Header = () =>{

  return (
    <header className="Header">
        <img src="" alt="" />
        <span>Livros vai na web</span>
        <nav>
            <ul className='menu'>
                <li>Inicio</li>
                <li>Livros doados</li>
                <li>Quero doar</li>
            </ul>
            <div>
                <p>O que você procura </p>
            </div>
        </nav>
       
    </header>
  )
}

export default Header