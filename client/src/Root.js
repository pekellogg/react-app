import NavLinks from "./ui/shared/navigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <NavLinks />
      {/* tell the root route where we want it to render its child routes */}
      <Outlet />
    </>
  );
}

export default Root;
