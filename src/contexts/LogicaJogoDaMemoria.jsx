import { createContext, useState } from "react";

export const LogicaJogoDaMemoriaContext = createContext()

export const LogicaJogoDaMemoriaProvider = ({children}) => {
  const [cartas, definirCartas] = useState([])
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([])
  const [idsDasCartasViradas, definirIdsDasCartasViradas] = useState([])

  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] = useState(0)
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0)

  const incrementarQuantidadeDeCartasViradas = () => {
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1)
  }

  const virarCarta = ({id, idDoPar}) => {
    incrementarQuantidadeDeCartasViradas()
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    
  }

  return(
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}
