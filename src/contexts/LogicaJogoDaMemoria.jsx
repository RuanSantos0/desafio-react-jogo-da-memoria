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

    const cartaJaVirada = idsDasCartasViradas.includes(id) || idsDosParesEncontrados.includes(idDoPar)
    if(cartaJaVirada) return;

    if(idsDasCartasViradas.length >= 2 ){
      return 
    }
    if(idsDasCartasViradas.length == 0 ){
      return definirIdDasCartasViradas([id])
    }
    definirIdDasCartasViradas((ids) => [...ids, id])
    const tempo = 2000;
    setTimeout(() => {
      definirIdDasCartasViradas([])
    }, tempo)
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    
    idsDasCartasViradas,
    idsDosParesEncontrados,
  }

  return(
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}
