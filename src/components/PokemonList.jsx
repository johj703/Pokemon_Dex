import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  const navigate = useNavigate();

  console.log(pokemonData);
  return (
    <>
      {pokemonData.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
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
