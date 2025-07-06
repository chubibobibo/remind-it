import { Outlet } from "react-router-dom";

function HomeLayout() {
  /** @Outlet renders all children components */
  return (
    <>
      <Outlet />
    </>
  );
}
export default HomeLayout;
