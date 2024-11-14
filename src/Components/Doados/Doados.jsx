import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import livroD from '../../assets/livroD.png';
import './Doados.scss'

const Doados = () =>{
  

    return (
      <>
      <Header/>
      <section className='box-doados'>
      <h2 className='title-doados'>Livros doados</h2>
      <div className='box-livro'>
      <img src={livroD} alt="" />
      <div className='box-text'>
      <p>O protagonista</p>
      <p>Susanne Andrade  </p>
      <p>Ficção</p>
      </div>
      </div>
      </section>
      <Footer/>  
      </>
    )
  }
  
  export default Doados