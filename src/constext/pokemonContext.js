import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

// useContext 함수 작성
export function usePokemon() {
  return useContext(PokemonContext);
}
