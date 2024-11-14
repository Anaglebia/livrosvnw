import Facebook from '../../assets/face.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Linkendin from '../../assets/linkendin.png';
import Instagram from '../../assets/instagram.png';
import './Footer.scss'

function Footer() {
  

  return (
    <footer className="footer">
     <p>4002-8922</p>
     <div className='imgens-rodape'>
      <img className='logo-rodape' src={Facebook} alt="Logo do Facebook" />
      <img className='logo-rodape' src={Twitter} alt="Logo do Twitter" />
      <img className='logo-rodape' src={Youtube} alt="Logo do Youtube" />
      <img className='logo-rodape' src={Linkendin} alt="Logo do Linkendin" />
      <img className='logo-rodape' src={Instagram} alt="Logo do Instagram" />
     </div>  
     <div className='rodape'>
      <p>Layout desenvolvido por Ana Bezerra - Vai Na Web para fins educativos - 2024  </p>
     </div>
    </footer>
  )
}

export default Footer