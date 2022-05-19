import Quiz from "./Quiz.js";
import Quiz1 from "./Quiz.js";

const Apresentacao = (props) => {
  
    const alteraTela = props.alteraTela;
    require("./Apresentação.css")
    return ( 
        <div className="corpo">

      <h1> ROTANIKA.TV </h1>
      <div onClick={()=> document.getElementsByClassName("serie", "desenho")[0].style.display = "block"} className="Start"> COMEÇAR </div>
      <p className="p"> QUAL SERÁ SUA ESCOLHA ?</p>
      <center>
      <div className="display">
        <div onClick={()=>  alteraTela(<Quiz alteraTela={alteraTela}/>) } class="serie"> - SÉRIES </div>
        <br>
        </br>
        <div onClick={()=> alteraTela(<Quiz1 alteraTela={alteraTela}/>) } class="desenho"> - DESENHOS  </div>
      </div>
      </center>
    </div>
     );
}
 
export default Apresentacao;