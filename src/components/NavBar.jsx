import React, { useEffect, useState } from "react";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const NavBar = ({ brandname, page, setPage, setFadeIn }) => {


  useEffect(() => {
    if(page){
    console.log(page)
  } else {
    console.log("no ha escogido una pagina")
  }
  
  }, [page])
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" onClick={() => {
                    setPage("jewelery");
                    setFadeIn(false);                    
                    }}>
              {brandname}
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a
                  className="nav-a nav-link active"
                  onClick={() => {
                    setPage("jewelery");
                    setFadeIn(false);                           
                    }}>
                  Jewelery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                    setPage("men's clothing");
                    setFadeIn(false);                           
                    }}>
                  men's clothing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                    setPage("women's clothing");
                    setFadeIn(false);       
                  }}>
                  women's clothing
                </a>
              </li>
            </ul>
             <CardWidget /> 
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;