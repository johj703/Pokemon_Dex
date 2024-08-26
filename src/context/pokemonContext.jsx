import { createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock.js";

export const PokemonContext = createContext(null);

// useContext 함수 작성
export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemonList, setSelectedPokemonList] = useState([]);
  const addPokemon = (pokemon) => {
    if (selectedPokemonList.length > 5) {
      alert("최대 포켓몬은 6마리 입니다.");
      return;
    }

    // 중복 선택시 alert 띄우는 함수
    if (selectedPokemonList.find((list) => list.id === pokemon.id)) {
      alert("중복된 포켓몬이 있습니다.");
      return;
    }

    // 데이터는 각 고유 ID
    if (MOCK_DATA.find((list) => list.id === pokemon.id)) {
      setSelectedPokemonList([
        ...selectedPokemonList,
        MOCK_DATA.find((list) => list.id === pokemon.id),
      ]);
    }
  };

  const removePokemon = (pokemon) => {
    // 삭제할 때 상태값으로 저장된 배열을 다시 반환을 해야한다.
    // 삭제한 상태로 반환해야 한다!
    setSelectedPokemonList(() => {
      return selectedPokemonList.filter((list) => list.id !== pokemon.id);
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemonList,
        setSelectedPokemonList,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
