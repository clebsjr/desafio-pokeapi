import React, { useState } from "react";
import axios from "axios";

import './styles.css'

function SearchInput(props) {
  const [pokemon, setPokemon] = useState("");

  async function handleSearchPokemon() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

      props.setPokemonData(response.data)
  }

  return (
    <div className="content_search">
      <input
        type="text"
        value={pokemon}
        onChange={(event) => setPokemon(event.target.value)}
        placeholder='Digite o nome do Pokémon'
      />
      <button type='button' onClick={handleSearchPokemon}>Buscar</button>
    </div>
  );
}

export default SearchInput;
