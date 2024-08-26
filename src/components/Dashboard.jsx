import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectPokemonList, removePokemon }) => {
  return (
    <>
      {selectPokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            removePokemon={removePokemon}
            isSelect={true}
          />
        );
      })}
    </>
  );
};

export default Dashboard;
