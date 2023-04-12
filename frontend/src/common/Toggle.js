import {useCallback, useState} from "react";

export const useBooleanToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);
  return [state, toggle];
};

export const useVisibilityToggle = (initialState = "hidden") => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => {
    return prevState === "hidden" ? "visible" : "hidden"
  }), []);
  return [state, toggle];
};