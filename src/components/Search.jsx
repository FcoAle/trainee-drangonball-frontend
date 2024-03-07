import React from 'react';

const Search = ({ onChange }) => {
  return (
    <div class="max-w-sm mx-auto">
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="buscar"
          class="block w-full p-3 ps-10 text-sm lg:w-60 text-white border rounded-lg"
          placeholder="Nombre,Raza,Poderes....."
          required
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Search;