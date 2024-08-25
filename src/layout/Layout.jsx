import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const LayoutComponent = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default LayoutComponent;
