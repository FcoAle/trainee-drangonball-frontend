

// Buscar personajes por ID
export const getPersonajesByID = async ({ID}: {ID: string}) =>{
  const res = await fetch(`http://pruebaapi.myddns.me/public/tarjeta/${ID}`)
  const dataId = await res.json()
  return dataId
}

// Buscar personajes con todos sus datos
export const getPersonajes = async () =>{

  const res = await fetch("http://pruebaapi.myddns.me/public/personajes")
  const data   = await res.json()

  return data

}

// Listar personajes correspondientes a un mismo ID de universo
export const getListarUniversoByID = async ({ID}: {ID: string}) =>{
  const res = await fetch(`http://pruebaapi.myddns.me/public/listadoUniverso/${ID}`)
  const dataId = await res.json()
  return dataId
}

// Listar array de universos
export const getUniversos = async () =>{

  const res = await fetch("http://pruebaapi.myddns.me/public/listaUniversos")
  const data   = await res.json()

  return data
  
}