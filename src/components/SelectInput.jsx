import React, { useEffect, useState } from 'react';

const Select = ({dataUni, onChange}) => {

  return (
      <div className="max-w-sm mx-auto">
        <select
          onChange={onChange}
          id="universos"
          className="block w-[213px] text-sm rounded-lg p-3 lg:w-60 border"
        >
          <option  className="text-white">
              Todos los universos
            </option>
          {dataUni.map((universo) => (
            <option key={universo.ID_UNIVERSO} className="text-white" value={universo.NOMBRE_UNIVERSO}>
              {universo.NOMBRE_UNIVERSO}
            </option>
          ))}
        </select>
      </div>
  );
};

export default Select;
