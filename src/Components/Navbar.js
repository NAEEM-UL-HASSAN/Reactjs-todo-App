import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./My_Style.css";

export default function Navbar(props) {
  const handleOnClick = () => {
    props.togglemode();
    props.aboutmode();
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 fixed-top`}
      >
        <div className="container-fluid">
          <a className="navbar-brand">{props.name}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pe-5">
                <Link className="nav-link" aria-current="page" to="/home">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/contactus">
                  {props.contactus}
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className={`text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <label className="form-check-label nav-link">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={props.mode === "light" ? faMoon : faSun}
                      onClick={handleOnClick}
                      style={{ cursor: "pointer", fontSize: "25px" }}
                    />
                    Enable {props.text} mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
