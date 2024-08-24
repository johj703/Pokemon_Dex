import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import poketmonData from "../mock";

const Dex = () => {
  const [selectPokemonList, setSelectPokemonList] = useState([]);
  return (
    <div>
      <h1>포켓몬 도감</h1>
      <p>여기에 포켓몬 리스트들이 표시 됩니다!</p>
      <Dashboard />
      <PokemonList poketmonData={poketmonData} />
    </div>
  );
};

export default Dex;
