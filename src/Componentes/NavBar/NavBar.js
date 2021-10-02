import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Actions";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  function logout() {
    dispatch(logOut());
    history.push("/");
  }

  return (
    <header className="header">
      <h1>
        Super<span> Heros</span>
      </h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/home" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link">
            Your Team
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={() => logout()} className="nav-link log">
            Log Out
          </button>
        </li>
      </ul>
    </header>
  );
}
