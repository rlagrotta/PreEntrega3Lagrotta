import CardWidget from "./CardWidget";

const NavBar = () => {
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
          <a className="navbar-brand" href="#">The Rocket Shop</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Bazookas{/* <span className="sr-only">(current)</span> */}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Misiles de Corto Alcance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Drones Teledirigidos</a>
            </li>
          </ul>
          <CardWidget/>
        </div>
      </div>
    </nav>
    </>);
}

export default NavBar;