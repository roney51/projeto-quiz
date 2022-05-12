import Apresentacao from "./Apresentacao";

const Final = (props) => {

    const alteraPontos = props.alteraPontos

    const alteraTela = props.alteraTela;
    return ( 
        <div>
            <h1>Parabéns!</h1>
            <p>Você Terminou o Quiz ANIMADO</p>
            <p>Seus pontos finais são:{alteraPontos} </p>
            <button onClick={()=> props.alteraTela(<Apresentacao alteraTela={alteraTela}/>) }>Recomeçar</button>
        </div>
     );
}
 
export default Final;
