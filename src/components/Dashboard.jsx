import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import styled from "styled-components";

const DashBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Dashboard = () => {
  const { selectedPokemonList } = useContext(PokemonContext);

  console.log(selectedPokemonList);
  return (
    <DashBoardContainer>
      {selectedPokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelect={true} />
        );
      })}
    </DashBoardContainer>
  );
};

export default Dashboard;
