import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
