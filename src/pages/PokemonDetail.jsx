import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

function PokemonDetail() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const pokemonId = searchParams.get("id");

  const pokemon = MOCK_DATA.find((item) => item.id === pokemonId);

  console.log(pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      {/* onClick 이벤트를 완성해주세요. */}
      <button onClick={() => {}}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;
