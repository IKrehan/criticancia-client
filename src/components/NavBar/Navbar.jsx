import { Row, Col } from "react-bootstrap";

import './Navbar.css';
import Logo from '../../assets/imgs/logo.png';

import NavButton from "../NavButton/NavButton";

function CategoryDisplay(props) {
    if (props.category) {
        return (
            <h4 className="category-head">{props.category}</h4>
        )
    } else {
        return <></>;
    }
}

function NavBar(props) {
    return (
    <Row className='navbar mx-5 my-3'>
        <Col className="ml-2 mr-n5">
            <Row className='d-flex justify-content-start'>
                <Col md={2} className="mr-3">
                    <a href="/" className="d-inline-md">
                        <img src={Logo} alt='Logo' className="logo"/>
                    </a>
                </Col>

                <Col md={4} className='ml-4 mt-3'>
                    <CategoryDisplay category={props.category} />
                </Col>
            </Row>
        </Col>

        <Col className="mt-2 pr-5">
        <Row>
            <Col>
                <NavButton title='CritiCast' link="/criticast" />
            </Col>

            <Col>
                <NavButton title='Filmes' link="/filmes" />
            </Col>
            
            <Col>
                <NavButton title='Séries' link="/series" />
            </Col>
            
            <Col>
                <NavButton title='Games' link="/games" />
            </Col>
        </Row>
        </Col>
    </Row>
    );
  }
  
  export default NavBar;
  