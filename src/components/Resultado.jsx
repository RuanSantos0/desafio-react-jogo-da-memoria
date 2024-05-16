import classNames from "classname";
import { useMemo } from "react";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { resultados } from "../constants/resultados";

export const Resultado = () => {

  const {quantidadeDeCartasViradas, idsDosParesEncontrados, cartas, reiniciarJogo} = useJogoDaMemoria()

  const jogoFinalizou = cartas.length === idsDosParesEncontrados.length * 2

  const cn = classNames("resultado", {
    "resultado--aberto": jogoFinalizou
  })

  const taxaDeAcertos = cartas.length / quantidadeDeCartasViradas * 100
  const resultado = useMemo(() => {
    return resultados.find(({min}) => min < taxaDeAcertos)
  },[taxaDeAcertos])

  return (
    <div className={cn}>
      <div className="resultado__caixa">
        <p>Seu nível é memória é:</p>
        <h1>{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          alt="Imagem referente ao nível de memória"
          height={150}
        />
        <p>
          <strong>Taxa de acerto: </strong>
          <span>{taxaDeAcertos.toFixed(0)}%</span>
        </p>
        <button className="button" onClick={reiniciarJogo}>Nova Partida</button>
        <p>
          <small>* Essa análise é ilustrativa e não possui base científica *</small>
        </p>
      </div>
    </div>
  );
};
