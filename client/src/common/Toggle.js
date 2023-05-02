import { useCallback, useState } from "react";

export function useBooleanToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);
  return [state, toggle];
};

export function useDisplayToggle(initialState = "none") {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => {
    return prevState === "none" ? "block" : "none"
  }), []);
  return [state, toggle];
};