import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Frame from '../../assets/Frame.png';
import './QueroDoar.scss';

const QueroDoar = () =>{
  

    return (
      <>
      <Header/>
      <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2> 
      <form action="" className='formulario'>
        <div className='quero-title'>
        <img src={Frame} alt="" />
        <span>Informações do Livro</span>
        </div>
        
        <input className='quero-input' type="text" placeholder='Titulo'/>
        <input className='quero-input' type="text" placeholder='Categoria'/>
        <input className='quero-input' type="text" placeholder='Autor'/>
        <input className='quero-input' type="text" placeholder='Link da imagem'/>
        <button className='btn'>Doar</button>
        </form> 
      <Footer/>
      </>
    )
  }
  
  export default QueroDoar