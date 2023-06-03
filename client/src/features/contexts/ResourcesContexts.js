import React from "react";
import { useContext } from "react";

// creates & exports below contexts to wrap App component for improved initial website load time
function useCameraContext() {
  useContext(React.createContext())
}

function usePhotoContext() {
  useContext(React.createContext())
}

function useRoverContext() {
  useContext(React.createContext(5))
}

export { useCameraContext, usePhotoContext, useRoverContext };