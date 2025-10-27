import { Routes, Route, Outlet, Link, BrowserRouter} from "react-router";

function MainLayout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Movie">Movies</Link>
            </li>
            <li><Link to="/Category">Categories</Link></li>
            <li>
                <Link to="/nothing-here">Nothing Here</Link>
            </li>
            </ul>
        </div>
        </div>





      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Movie">Movies</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav> */}

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default MainLayout