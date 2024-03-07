
import  { useState } from 'react';
import Per from "./Per"
import SelectInput from "./SelectInput"
import SearchInput from "./Search"

const FiltroComponente = ({ data, dataUni }) => {

// declaracion de variables y su manejo de estados
  const [seleccionarUniverso, setSelectedUniverso] = useState(null);
  const [buscarPalabras, setBuscarPalabras] = useState('');


  const handleFilterChange = (e) => {
    setSelectedUniverso(e.target.value);
  };

  const handleSearchChange = (e) => {
    setBuscarPalabras(e.target.value);
  };
  
  return (
    <>
      <section class="flex flex-col w-full gap-2 lg:flex lg:flex-row items-center mb-2"> 
      <SearchInput onChange={handleSearchChange}/>
      <SelectInput dataUni={dataUni} onChange={handleFilterChange}/>
      </section>
      
      <Per data={data} seleccionarUniverso={seleccionarUniverso} buscarPalabras={buscarPalabras}/>
    </>
  );
};


export default FiltroComponente;
