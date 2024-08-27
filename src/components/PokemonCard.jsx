import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/pokemonContext";
import { useContext } from "react";
import styled from "styled-components";

const PokemonCardWrapper = styled.div`
  width: 96px;
  border: 1px solid black;
  padding-bottom: 5px;
`;

function PokemonCard({ pokemon, isSelect }) {
  // console.log("pokemon => ", pokemon);
  const navigate = useNavigate();

  // const context = useContext(PokemonContext);
  // console.log(context);

  const { addPokemon, removePokemon } = useContext(PokemonContext);
  // console.log(removePokemon);

  return (
    <PokemonCardWrapper>
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
    </PokemonCardWrapper>
  );
}

export default PokemonCard;
