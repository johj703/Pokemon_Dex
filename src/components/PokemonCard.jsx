import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/pokemonContext";
import { useContext } from "react";

function PokemonCard({ pokemon, isSelect }) {
  // console.log("pokemon => ", pokemon);
  const navigate = useNavigate();

  // const context = useContext(PokemonContext);
  // console.log(context);

  const { addPokemon, removePokemon } = useContext(PokemonContext);
  // console.log(removePokemon);

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/detail?id=${pokemon.id}`);
        }}
      >
        <img src={pokemon.img_url} />
        <h2>{pokemon.korean_name}</h2>
      </div>
      {isSelect ? (
        <button type="button" onClick={() => removePokemon(pokemon)}>
          삭제
        </button>
      ) : (
        <button type="button" onClick={() => addPokemon(pokemon)}>
          추가
        </button>
      )}
    </div>
  );
}

export default PokemonCard;
