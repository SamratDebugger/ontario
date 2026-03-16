import { Link } from "react-router";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <header className="mx-5 sticky z-50 top-5">
      <div className="navbar bg-white/50 backdrop-blur-sm shadow-sm max-w-360 rounded-full px-5 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavMenu />
            </ul>
          </div>
          <Link to="/" className="">
            <img src="/assets/images/ontario-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavMenu />
          </ul>
        </div>
        <div className="navbar-end">
          <button data-theme="dark" className="btn rounded-full ">
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
}
