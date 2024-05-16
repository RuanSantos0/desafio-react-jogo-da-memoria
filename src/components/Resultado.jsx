import classNames from "classname";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Resultado = () => {

  const {idsDosParesEncontrados, cartas} = useJogoDaMemoria()

  const jogoFinalizou = cartas.length === idsDosParesEncontrados.length * 2

  const cn = classNames("resultado", {
    "resultado--aberto": jogoFinalizou
  })

  return (
    <div className={cn}>
      <div className="resultado__caixa">
        <p>Seu nível é memória é:</p>
        <h1>Bom</h1>
        <img
          src="/kitekat-3.png"
          alt="Imagem referente ao nível de memória"
          height={150}
        />
        <p>
          <strong>Taxa de acerto: </strong>
          <span>60%</span>
        </p>
        <button className="button">Nova Partida</button>
        <p>
          <small>* Essa análise é ilustrativa e não possui base científica *</small>
        </p>
      </div>
    </div>
  );
};
