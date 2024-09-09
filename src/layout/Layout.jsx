import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const LayoutComponent = () => {
  return (
    <div className="layout-container">
      <aside>
        <Nav />
      </aside>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutComponent;
