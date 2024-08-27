import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonListContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  width: 1200px;
  justify-content: space-between;
  margin: auto;
`;

const PokemonList = ({ pokemonData }) => {
  const navigate = useNavigate();

  console.log(pokemonData);
  return (
    <PokemonListContainer>
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
    </PokemonListContainer>
  );
};

export default PokemonList;
