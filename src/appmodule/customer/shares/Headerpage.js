import React from 'react'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Headerpage() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
    <div className="container-fluid">
    <button className="btn btn-default ms-2 me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FaBars/></button>
      <Link className="navbar-brand" to="#">Navbar</Link>
      
      <div className="collapse navbar-collapse" id="navbarNavaltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
          <Link className="nav-link" to="#">Features</Link>
          <Link className="nav-link" to="#">Pricing</Link>
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Headerpage