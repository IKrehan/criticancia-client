import { Row, Col } from "react-bootstrap";

import "./Navbar.css";
import Logo from "../../assets/imgs/logo.png";

import NavButton from "../NavButton/NavButton";

function NavBar(props) {
  return (
    <Row className="navbar mx-5 my-3">
      <Col className="ml-2 mr-n5">
        <a href="/" className="d-inline-md">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </Col>

      <Col className="mt-2 pr-5">
        <Row>
          <Col>
            <NavButton title="Filmes" link="/filmes" />
          </Col>

          <Col>
            <NavButton title="Séries e TV" link="/series-e-tv" />
          </Col>

          <Col>
            <NavButton title="Games" link="/games" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NavBar;
