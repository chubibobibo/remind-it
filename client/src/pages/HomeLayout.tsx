import { Outlet } from "react-router-dom";

function HomeLayout() {
  /** @Outlet renders all children components */
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}
export default HomeLayout;
