import logo from "../images/gfbio_logo_small.svg";
import React from "react";

export default function NavBar(props) {

    const [navCollapsed, setNavCollapsed] = React.useState(true);

    function toogleNav() {
        setNavCollapsed(!navCollapsed);
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink navbar-shrink-content"
        id="mainNavContent">
            <div class="container">
                <a class="navbar-brand " href="/" style={{ background:`url(${logo}) no-repeat center center` }}>
                    <h1></h1>
                </a>
                <button class="navbar-toggler" type="button" onClick={toogleNav}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse d-lg-flex flex-lg-row-reverse " + (navCollapsed ? "" : "show")}
                    id="navbarResponsive" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item {% if request.path == url %}active{% endif %}">
                            <a class="nav-link" href="https://gfbio.org/services/" target="_blank"
                                    rel="noopener noreferrer">
                                GFBio Services
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://gfbio.org/gfbio_ev">
                                GFBio e.V.
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.nfdi4biodiversity.org/">
                            NFDI 4 Bio <i class="mdi mdi-open-in-new"></i>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}
