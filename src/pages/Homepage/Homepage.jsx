import { Container, Row, Col } from "react-bootstrap";

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Thumb from '../../assets/imgs/thumb.jpg';

function Homepage() {
  return (
    <div>
      <Container fluid>
        <NavBar />

        <Row className='m-5'>
          <Col className='m-3'>
            <PostBox category='Filmes' title='Title goes here!' img={Thumb} id="1" categoryLink='/filmes' />
          </Col>

          <Col className='m-3'>
            <PostBox category='Filmes' title='Title goes here!' img={Thumb} id="1" categoryLink='/filmes'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
