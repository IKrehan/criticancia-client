import { Row, Col } from "react-bootstrap";

import "./Navbar.css";
import Logo from "../../assets/imgs/logo.png";
import Close from "../../assets/imgs/close.png";
import Bars from "../../assets/imgs/bars.png";

import NavButton from "../NavButton/NavButton";
import { useState } from "react";

function NavBar(props) {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  return (
    <Row className="navbar m-lgx-5 my-3">
      <Col className="ml-lg-5 mr-n5">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </Col>

      <Col className="mt-2 pr-5 d-none d-lg-block">
        <Row>
          <Col>
            <NavButton title="Filmes" link="/category/filmes" />
          </Col>

          <Col>
            <NavButton title="Séries e TV" link="/category/series-e-tv" />
          </Col>

          <Col>
            <NavButton title="Games" link="/category/games" />
          </Col>
        </Row>
      </Col>

      <div className="d-lg-none d-xs-block">
      <button className="button-none" onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
        <img src={isMenuOpen ? Close : Bars} className="menu-button p-1 invert" alt="close button" />
        </button>
      </div>


      <div className="position-absolute menu p-2 rounded" hidden={!isMenuOpen}>
        <div className="m-2 px-2 py-1 button rounded">
          <a href="/category/filmes">Filmes</a>
        </div>

        <div className="m-2 px-2 py-1 button rounded" >
          <a href="/category/series-e-tv">Séries e TV</a>
        </div>

        <div className="m-2 px-2 py-1 button rounded">
          <a href="/category/games">Games</a>
        </div>

      </div>      
    </Row>
  );
}

export default NavBar;
