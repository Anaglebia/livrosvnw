import "./Main.scss";
import Livros from '../../assets/livros.png';
import Roda from '../../assets/8541846 1community.png';
import Lendo from '../../assets/566985 1reading.png';
import Forca from '../../assets/2191244 1transform.png';
import Balanca from '../../assets/101964 1balance.png';

const Main = () =>{
  

    return (
      <>
      <section>
        <div className="title-banner_principal">
      <h2 className="title-banner">Venha Fazer parte da maior rede de doação</h2>
        </div>
      <img className="banner" src={Livros} alt="Imagem de maos segurando 3 livros " />
      </section> 
       
      <section className="box-principal">
        <div className="box">
          <img className="box-img" src={Roda} alt="" />
          <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </div>
        <div className="box">
        <img className="box-img" src={Lendo} alt="" />
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </div>
        <div className="box">
        <img className="box-img" src={Forca} alt="" />
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </div>
        <div className="box">
        <img className="box-img" src={Balanca} alt="" />
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </div>
      </section>
      </>
    )
  }
  
  export default Main