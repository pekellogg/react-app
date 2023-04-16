import {useCallback, useState} from "react";

export const useBooleanToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);
  return [state, toggle];
};

export const useDisplayToggle = (initialState = "none") => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((prevState) => {
    return prevState === "none" ? "block" : "none"
  }), []);
  return [state, toggle];
};