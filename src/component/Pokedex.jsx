import { useEffect, useState } from "react";
import "./pokedex.css";
const POKEMON_COUNT = 150;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);
function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = [];
      for (let i = 1; i <= POKEMON_COUNT; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemonData.push(data);
      }
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemonsApp">
      <h1>Pokedex</h1>
      <div className="pokemons-container">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

function PokemonCard({ pokemon }) {
  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((t) => pokemonTypes.includes(t));
  const color = colors[type];

  return (
    <div className="pokemon" style={{ backgroundColor: color }}>
      <div className="img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={name}
        />
      </div>
      <div className="info">
        <span className="number">#{id}</span>
        <span className="name">{name}</span>
        <small className="type">
          <span>{type}</span>
        </small>
      </div>
    </div>
  );
}

export default Pokedex;
