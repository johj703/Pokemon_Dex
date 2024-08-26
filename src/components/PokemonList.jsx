import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonList = ({ pokemonData, addPokemon }) => {
  const navigate = useNavigate();

  const context = useContext(PokemonContext);
  console.log(context);

  return (
    <>
      {pokemonData.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
            isSelect={false}
            onClick={() => {
              navigate(``);
            }}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
