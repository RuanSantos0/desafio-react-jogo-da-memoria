import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Placar = () => {
  const { quantidadeDeCartasViradas, quantidadeDePontos } = useJogoDaMemoria();

  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={quantidadeDePontos} />
      <Pontos titulo="Cartas Viradas" valor={quantidadeDeCartasViradas} />
    </div>
  );
};

const Pontos = ({ titulo, valor }) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}: </strong>
      <strong className="pontos__valor">{valor}</strong>
    </div>
  );
};
