import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ poketmonData, addPokemon }) => {
  const navigate = useNavigate();
  return (
    <>
      {poketmonData.map((pokemon) => {
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
