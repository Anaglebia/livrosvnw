import Facebook from '../../assets/face.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Linkendin from '../../assets/linkendin.png';
import Instagram from '../../assets/instagram.png';
import S from './footer.module.scss'

function Footer() {
  

  return (
    <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={Facebook} alt="" /> </a>
                    <a href=""> <img src={Twitter} alt="" /> </a>
                    <a href=""> <img src={Youtube} alt="" /> </a>
                    <a href=""> <img src={Linkendin } alt="" /> </a>
                    <a href=""> <img src={Instagram } alt="" /> </a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido por Ana Bezerra Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    
  )
}

export default Footer