import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import avatar from "../../assets/avatar.jpg";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="navbar bg-base-100 py-6 px-4 md:px-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none gap-2 flex items-center">
        {user ? (
          <div className=" gap-2 items-center hidden md:flex">
            <Link to="/logout">
              <button className="btn btn-primary">Logout</button>
            </Link>
            <Link to="/user">
              <button className="btn btn-accent">Profile</button>
            </Link>
          </div>
        ) : (
          <div className=" gap-2 items-center hidden md:flex">
            <Link to="/signup">
              <button className="btn btn-primary">Sign up</button>
            </Link>
            <Link to="/signin">
              <button className="btn btn-accent">Login</button>
            </Link>
          </div>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div class="avatar">
              <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {user ? (
              <li>
                <Link to="/user" className="justify-between">
                  <button className="btn btn-outline btn-success w-44">
                    Profile <span className="badge">New</span>
                  </button>
                </Link>
              </li>
            ) : null}
            <li>
              <Link to="/signin">
                <button className="btn btn-outline btn-primary w-44">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="btn btn-outline btn-secondary w-44">
                  Sign up
                </button>
              </Link>
            </li>
            {user ? (
              <li>
                <Link to="/logout">
                  <button className="btn btn-outline btn-error w-44">
                    Logout
                  </button>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
