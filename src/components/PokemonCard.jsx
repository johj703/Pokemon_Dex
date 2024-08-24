function PokemonCard({ pokemon, addPokemon }) {
  console.log("pokemon => ", pokemon);
  return (
    <div>
      <img src={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      <button type="button" onClick={() => addPokemon(pokemon)}>
        추가
      </button>
    </div>
  );
}

export default PokemonCard;
