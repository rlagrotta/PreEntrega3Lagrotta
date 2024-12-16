import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Únete</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Registrarme
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Inicia Sesión
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Vender
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Ser Tienda Oficial
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Sobre RocketShop</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Trabaja con Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contáctanos</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:soporte@rocketshop.com"
                  className="text-white text-decoration-none"
                >
                  soporte@rocketshop.com
                </a>
              </li>
              <li className="mt-2">
                OCEANÍA, TORRE 1000, 24B
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 pb-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} RocketShop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
