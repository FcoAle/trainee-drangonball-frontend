import { number } from "astro/zod"

export const getPersonajesByID = async ({ID}: {ID: string}) =>{
  const res = await fetch(`https://d015-191-114-146-160.ngrok-free.app/tarjeta/${ID}`)
  const dataId = await res.json()
  console.log(dataId)
  return dataId
}

export const getPersonajes = async () =>{

  const res = await fetch("https://d015-191-114-146-160.ngrok-free.app/personajes")
  const data   = await res.json()

  return data

}

