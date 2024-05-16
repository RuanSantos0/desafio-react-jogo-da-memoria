import { paresDeCartas } from "../constants/cartas"

export const buscarCartas = async () => {
  await delay(2000)
  return embaralharListas(paresDeCartas)
}

const delay = async (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo)
  })
}

const embaralharListas = (lista = []) => {
  let indice;
  for(indice = lista.length - 1; indice > 0; indice--){
    
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1)) 
    
    const item = lista[indice]
    const itemAleatorio = lista[indiceAleatorio]

    lista[indice] = itemAleatorio;
    lista[indiceAleatorio] = item
  }
  return lista
}
