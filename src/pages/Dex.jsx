// import { useState } from "react";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import pokemonData from "../mock";
import { PokemonProvider } from "../context/pokemonContext";

const Dex = () => {
  // 선택한 데이터를 저장할 공간

  // 포켓몬 추가 함수
  // selectPokemonList에 내가 선택한 포켓몬을 담아주기 위한 함수
  // set 함수 사용한다!

  // 포켓몬 삭제 함수

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <p>여기에 포켓몬 리스트들이 표시 됩니다!</p>
      <PokemonProvider>
        <Dashboard />
        <hr />
        <PokemonList pokemonData={pokemonData} />
      </PokemonProvider>
    </div>
  );
};

export default Dex;
