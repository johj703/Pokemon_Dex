import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectPokemonList }) => {
  return (
    <>
      {selectPokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelect={true} />
        );
      })}
    </>
  );
};

export default Dashboard;
