import classNames from "classname";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Carta = ({ id, idDoPar, imagem }) => {
  const { virarCarta, idsDasCartasViradas } = useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({ id, idDoPar });
  };

  const cartaVirada = idsDasCartasViradas.includes(id);

  const carta = classNames("carta", {
    "carta--virada": cartaVirada,
  });

  return (
    <button id={id} className={carta} onClick={controlarClique}>
      <div className="carta__conteudo">
        <div className="carta__frente" />
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  );
};
