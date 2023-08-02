import DataContextProvider from "./shared/DataContextProvider";
import NavLinks from "./ui/shared/navigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <DataContextProvider>
      <NavLinks />
      {/* tell the root route where we want it to render its child routes */}
      <Outlet />
    </DataContextProvider>
  );
}

export default Root;
