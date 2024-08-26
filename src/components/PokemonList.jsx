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
            isSelect={false}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
