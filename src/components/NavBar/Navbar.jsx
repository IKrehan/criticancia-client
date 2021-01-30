import { Row, Col } from "react-bootstrap";
import './Navbar.css';
import Logo from '../../assets/imgs/logo.png';

import NavButton from "../NavButton/NavButton";

function NavBar() {
    return (
    <Row className='navbar mx-5 my-3'>
        <Col className="ml-2 mr-n5">
            <img src={Logo} className="logo"/>
        </Col>

        <Col className="mt-2 pr-5">
        <Row>
            <Col>
                <NavButton title='CritiCast' link="/criticast" />
            </Col>

            <Col>
                <NavButton title='Filmes' link="/criticast" />
            </Col>
            
            <Col>
                <NavButton title='Séries' link="/criticast" />
            </Col>
            
            <Col>
                <NavButton title='Games' link="/criticast" />
            </Col>
        </Row>
        </Col>
    </Row>
    );
  }
  
  export default NavBar;
  