import logo from "../images/gfbio_logo_small.svg";
import React from "react";

export default function NavBar(props) {
  const [navCollapsed, setNavCollapsed] = React.useState(true);

  function toogleNav() {
    setNavCollapsed(!navCollapsed);
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink navbar-shrink-content"
      id="mainNavContent"
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          style={{ background: `url(${logo}) no-repeat center center` }}
        >
          <h1></h1>
        </a>
        <button className="navbar-toggler" type="button" onClick={toogleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "collapse navbar-collapse d-lg-flex flex-lg-row-reverse " +
            (navCollapsed ? "" : "show")
          }
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item {% if request.path == url %}active{% endif %}">
              <a
                className="nav-link"
                href="https://www.gfbio.org/services/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GFBio Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.gfbio-ev.de/">
                GFBio e.V.
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.nfdi4biodiversity.org/">
                NFDI 4 Bio <i className="mdi mdi-open-in-new"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
