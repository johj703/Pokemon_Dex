// import { useState } from "react";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import poketmonData from "../mock";
import { PokemonContext } from "../constext/pokemonContext";

const Dex = () => {
  // 선택한 데이터를 저장할 공간
  const [selectPokemonList, setSelectPokemonList] = useState([]);

  // 포켓몬 추가 함수
  // selectPokemonList에 내가 선택한 포켓몬을 담아주기 위한 함수
  // set 함수 사용한다!
  const addPokemon = (pokemon) => {
    setSelectPokemonList(() => {
      // 데이터는 각 고유 ID
      if (selectPokemonList.find((list) => list.id === pokemon.id)) {
        alert("중복된 포켓몬이 있습니다.");
        return [...selectPokemonList];
      }
      return [...selectPokemonList, pokemon];
    });
    console.log(selectPokemonList);
    if (selectPokemonList.length > 6) {
      alert("최대 포켓몬은 6개 입니다.");
      return;
    }

    selectPokemonList((prev) => {
      prev();
    });
  };

  // 포켓몬 삭제 함수
  const removePokemon = (pokemon) => {
    // 삭제할 때 상태값으로 저장된 배열을 다시 반환을 해야한다.
    // 삭제한 상태로 반환해야 한다!
    setSelectPokemonList(() => {
      return selectPokemonList.filter((list) => list.id !== pokemon.id);
    });
  };

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <p>여기에 포켓몬 리스트들이 표시 됩니다!</p>
      <PokemonContext.Provider
        value={{
          selectedPokemon: selectPokemonList,
          setSelectPokemonList: setSelectPokemonList,
        }}
      >
        <Dashboard
          selectPokemonList={selectPokemonList}
          removePokemon={removePokemon}
        />
        <hr />
        <PokemonList poketmonData={poketmonData} addPokemon={addPokemon} />
      </PokemonContext.Provider>
    </div>
  );
};

export default Dex;
