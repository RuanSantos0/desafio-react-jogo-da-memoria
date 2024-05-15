import { createContext, useState } from "react";

export const LogicaJogoDaMemoriaContext = createContext()

export const LogicaJogoDaMemoriaProvider = ({children}) => {
  const [cartas, definirCartas] = useState([])
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([])
  const [idsDasCartasViradas, definirIdDasCartasViradas] = useState([])

  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] = useState(0)
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0)

  const incrementarQuantidadeDeCartasViradas = () => {
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1)
  }

  const virarCarta = ({id, idDoPar}) => {
    incrementarQuantidadeDeCartasViradas()
    definirIdDasCartasViradas((ids) => [...ids, id])
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    
    idsDasCartasViradas,
  }

  return(
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}
