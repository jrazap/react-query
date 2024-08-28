import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav my-2">
    <div className="container flex-between">
      <h2 className="fs-4">React Query</h2>
      <ul className="items-center gap-3">
        <li>
          <Link className="text-dark" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/super-heroes">
            Super Heroes
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/rq-super-heroes">
            RQ Super Heroes
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/rq-parallel">
            RQ Parallel
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
