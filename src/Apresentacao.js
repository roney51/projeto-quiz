import Quiz from "./Quiz.js";

const Apresentacao = (props) => {
  
    const alteraTela = props.alteraTela;
    require("./Apresentação.css")
    return ( 
        <div className="corpo">

      <h1> ROTANIKA.TV </h1>
      <p> QUAL SERÁ SUA ESCOLHA ?</p>
      <center>
        <div onClick={()=> alteraTela(<Quiz alteraTela={alteraTela}/>) } class="serie"> - SÉRIES </div>
        <br>
        </br>
        <div onClick={()=> alteraTela(<Quiz alteraTela={alteraTela}/>) } class="desenho"> - DESENHOS  </div>
      </center>
    </div>
     );
}
 
export default Apresentacao;