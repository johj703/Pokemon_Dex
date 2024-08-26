import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

// useContext 함수 작성
export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemonList, setSelectedPokemonList] = useState([]);

  const addPokemon = (pokemon) => {
    selectedPokemonList(() => {
      // 데이터는 각 고유 ID
      if (selectedPokemonList.find((list) => list.id === pokemon.id)) {
        alert("중복된 포켓몬이 있습니다.");
        return [...selectedPokemonList];
      }
      return [...selectedPokemonList, pokemon];
    });
    console.log(selectedPokemonList);
    if (selectedPokemonList.length > 6) {
      alert("최대 포켓몬은 6개 입니다.");
      return;
    }

    selectedPokemonList((prev) => {
      prev();
    });
  };
  const removePokemon = (pokemon) => {
    // 삭제할 때 상태값으로 저장된 배열을 다시 반환을 해야한다.
    // 삭제한 상태로 반환해야 한다!
    selectedPokemonList(() => {
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
