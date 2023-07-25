import useFetch from "../data/useFetch";
import { createContext, useContext } from "react";

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const photos = useFetch("/api/v1/photos");
  const rovers = useFetch("api/v1/rovers");
  const cameras = useFetch("api/v1/cameras");

  return (
    <DataContext.Provider value={{ cameras, photos, rovers }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
