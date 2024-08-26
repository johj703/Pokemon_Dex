import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div``;

function PokemonCard({ pokemon, addPokemon, removePokemon, isSelect }) {
  console.log("pokemon => ", pokemon);
  const navigate = useNavigate();
  return (
    <Card>
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
    </Card>
  );
}

export default PokemonCard;
