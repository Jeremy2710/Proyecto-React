
import React from "react";
import "./Footer.scss";


export const Footer = () => {
    return (
        <section className="FooterSection">
      <footer classname="top">
        <img src="planetaninez.png" />
        <div classname="links">
          <div classname="links-column">
            <h2>Get Started</h2>
            <a>Introduction</a>
            <a>Documentation</a>
            <a>Usage</a>
            <a>Globals</a>
            <a>Elements</a>
          </div>
          <div classname="links-column">
            <h2>Resources</h2>
            <a>API</a>
            <a>Visibility</a>
            <a>Accessibility</a>
            <a>Community</a>
            <a>Marketplace</a>
          </div>
          <div classname="links-column socials-column">
            <h2>Redes Sociales</h2>
            <p>
              Siguenos en nuestras redes sociales para estar al tanto de las ultimas novedades
            </p>
            <div classname="socials">
              <a classname="fa-brands fa-facebook"></a>
              <a classname="fa-brands fa-instagram"></a>
              <a classname="fa-brands fa-linkedin"></a>
            </div>
          </div>
        </div>
      </footer>
      <footer classname="bottom">
        <p classname="copyright">© 2023 All rights reserved</p>
        <div classname="legal">
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </footer>
    </section>
    )
}
export default (Footer)