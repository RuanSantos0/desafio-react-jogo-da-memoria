import { createContext, useState } from "react";
import { paresDeCartas } from "../constants/cartas"

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

  const iniciarJogo = () => {
    definirCartas(paresDeCartas)
  }

  const virarCarta = ({id, idDoPar}) => {
    incrementarQuantidadeDeCartasViradas()

    const incrementarPontos = () => {
      definirQuantidadeDePontos(pontos => pontos + 5);
    }

  
    const compararCartas = ([id1, id2]) => {
      const idDoPar1 = cartas.find(({id}) => id === id1)?.idDoPar;
      const idDoPar2 = cartas.find(({id}) => id === id2)?.idDoPar;
      return idDoPar1 === idDoPar2;
    }

    const cartaJaVirada = idsDasCartasViradas.includes(id) || idsDosParesEncontrados.includes(idDoPar)
    if(cartaJaVirada) return;

    if(idsDasCartasViradas.length >= 2 ){
      return 
    }
    if(idsDasCartasViradas.length == 0 ){
      return definirIdDasCartasViradas([id])
    }

    const ids = [idsDasCartasViradas[0], id]
    definirIdDasCartasViradas(ids)

    const cartasIguais = compararCartas(ids)
    if(cartasIguais) {
      incrementarPontos();
      definirIdsDosParesEncontrados((ids) => [...ids, idDoPar])
    }

    const tempo = cartasIguais ? 0 : 2000;
    setTimeout(() => {
      definirIdDasCartasViradas([])
    }, tempo)
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,

    iniciarJogo,
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
