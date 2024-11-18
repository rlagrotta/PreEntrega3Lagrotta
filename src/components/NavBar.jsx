import React, { useEffect, useState } from "react";
import CardWidget from "./CardWidget";

const NavBar = ({ brandname, category, setCategory }) => {


  useEffect(() => {
    if(category){
    console.log(category)
  } else {
    console.log("no ha escogido una categoría")
  }
  
  }, [category])
  

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
                    setCategory("jewelery");
                                     
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
                    setCategory("jewelery");
                                            
                    }}>
                  Jewelery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                    setCategory("men's clothing");
                                            
                    }}>
                  men's clothing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                    setCategory("women's clothing");
                         
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