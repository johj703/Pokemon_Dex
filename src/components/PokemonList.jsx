import PokemonCard from "./PokemonCard";

const PokemonList = ({ poketmonData, addPokemon }) => {
  return (
    <>
      {poketmonData.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
