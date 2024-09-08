import { Link, useLocation } from "react-router-dom";

const navRoutes = [
  { path: "/", label: "Home" },
  { path: "/super-heroes", label: "Super Heroes" },
  { path: "/rq-super-heroes", label: "RQ Super Heroes" },
  { path: "/rq-parallel", label: "RQ Parallel" },
  { path: "/rq-dynamic-parallel", label: "RQ Dynamic Parallel" },
  { path: "/rq-dependent", label: "RQ Dependent" },
  { path: "/rq-paginated", label: "RQ Paginated" },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav my-2">
      <div className="container flex-between">
        <h2 className="fs-4">React Query</h2>
        <ul className="items-center gap-3">
          {navRoutes.map((route) => (
            <li
              key={route.path}
              className={`${location.pathname === route.path ? "active" : ""}`}
            >
              <Link className="text-dark link-style" to={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
