import React, { useState, useEffect } from "react";
import Carta from "./Carta";

const Personajes = ({ data, seleccionarUniverso, buscarPalabras }) => {
  let filtroData = data;
// condicional de seleccion para el filtro de busqueda por universo
  if (seleccionarUniverso && seleccionarUniverso !== "Todos los universos") {
    filtroData = filtroData.filter(
      (character) => character.UNIVERSO === seleccionarUniverso
    );
  }

  // condicional de busqueda por input text automatica
  if (buscarPalabras) {
    filtroData = filtroData.filter(
      (character) =>
        character.NOMBRE.toLowerCase().includes(buscarPalabras.toLowerCase()) ||
        character.RAZA.toLowerCase().includes(buscarPalabras.toLowerCase()) ||
        character.PODERES.some((poder) =>
          poder.toLowerCase().includes(buscarPalabras.toLowerCase())
        )
    );
  }

  return (
    <section className="mt-9">
      <h2 className="text-6xl font-semibold text-center">Personajes</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* map de datos traidos despues de las validaciones y filtros */}
        {filtroData.length > 0 ? (
          filtroData.map((personaje) => (
            <Carta
              key={personaje.ID}
              ID={personaje.ID}
              NOMBRE={personaje.NOMBRE}
              IMAGEN={personaje.IMAGEN}
              DESCRIPCION={personaje.DESCRIPCION}
              UNIVERSO={personaje.UNIVERSO}
            />
          ))
        ) : (
          <div className="col-start-2 col-span-1 w-full items-center mt-20 ">
            <p className=" text-center text-3xl">Datos ingresados no coinciden con algún personaje</p>
            <img className="" src="https://tec.com.pe/wp-content/uploads/2020/09/107a97ca5bd4a571edcebec54a66fc32-750x430.jpg" alt="No data" />
          </div>
        )}
      </div>
    </section>
  );
};
export default Personajes;
