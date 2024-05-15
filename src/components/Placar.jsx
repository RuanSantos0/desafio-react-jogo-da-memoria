export const Placar = () => {
  return(
    <div className="placar">
      <Pontos titulo="Pontos" valor={0} />
      <Pontos titulo="Cartas Viradas" valor={0} />
    </div>
  )
}

const Pontos = ({titulo, valor}) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}: </strong>
      <strong className="pontos__valor">{valor}</strong>
    </div>
  )
}
