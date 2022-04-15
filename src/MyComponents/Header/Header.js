import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark ">
        <div className="container-fluid text-warning ">
          <Link className="navbar-brand link" to="/">{props.title}</Link>
          <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-dark "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/about">About</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link link" to="/contact-us">Contact us</Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",

}

