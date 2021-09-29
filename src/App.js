import { useState } from "react";
import PokemonInfo from "./components/PokemonInfo";
import SearchInput from "./components/SearchInput";

import "./styles/app.css";

function App() {
  const [pokemonData, setPokemonData] = useState({});

  return (
    <div className="container">
      <SearchInput setPokemonData={setPokemonData} />

      {Object.values(pokemonData).length === 0 ? (
        <h2>Pesquise por um Pokémon</h2>
      ) : (
        <PokemonInfo pokemonData={pokemonData} />
      )}
    </div>
  );
}

export default App;
