import React from "react";

import "./styles.css";

function PokemonInfo({ pokemonData }) {
  console.log(pokemonData);

  const abilities = pokemonData?.abilities.map((data) => data.ability);

  abilities.sort(function (x, y) {
    let a = x.name.toUpperCase(),
      b = y.name.toUpperCase();

    return a === b ? 0 : a > b ? 1 : -1;
  });

  console.log(abilities);

  return (
    <div className="container_info">
      <div className='content_info'>
        <img src={pokemonData?.sprites.front_default} alt="pokemon" />
        <h5>{pokemonData?.name}</h5>
      </div>

      <div className='content_abilities'>
        <p>Habilidades</p>
        {abilities.map((ability) => (
          <p>{ability.name}</p>
        ))}
      </div>
    </div>
  );
}

export default PokemonInfo;
