import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = ({ brandname, category, setCategory }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const categoryReplacement = "Jewelery";

  useEffect(() => {
    if (!id) {
      setCategory(categoryReplacement);
    } else {
      setCategory(id);
    }
  }, [id, setCategory]);

  const handleCategoryChange = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
    setCategory(categoryName);
  };

  return (
    <>
      <div className="container">
        <h1>{category || categoryReplacement}</h1>
      </div>
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
            <a className="navbar-brand" onClick={() => handleCategoryChange("jewelery")}>
              {brandname}
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => handleCategoryChange("jewelery")}>
                  Jewelery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleCategoryChange("men's clothing")}>
                  Men's Clothing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleCategoryChange("women's clothing")}>
                  Women's Clothing
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
