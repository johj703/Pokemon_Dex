import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/pokemonContext";

const Dashboard = () => {
  const { selectedPokemonList } = useContext(PokemonContext);

  console.log(selectedPokemonList);
  return (
    <>
      {selectedPokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelect={true} />
        );
      })}
    </>
  );
};

export default Dashboard;
