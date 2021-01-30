import { Container, Row, Col } from "react-bootstrap";

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Thumb from '../../assets/imgs/thumb.jpg';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const posts = [
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
  {
    id: '1',
    category: 'Category',
    categoryLink: '/category',
    title: 'Title goes here so users can read it!',
    img: Thumb,
  },
]

function Homepage() {
  return (
    <div>
      <Container fluid>
        <NavBar />

        <Row className='m-5'>
          <Col className='m-3'>
            <PostBox 
              category='Filmes' 
              title='Title goes here!' 
              img={Thumb} 
              id="1" 
              categoryLink='/filmes' 
            />
          </Col>

          <Col className='m-3'>
            <PostBox 
              category='Filmes' 
              title='Title goes here!' 
              img={Thumb} id="1" 
              categoryLink='/filmes'
            />
          </Col>
        </Row>

        <SectionHeader title="Last News" />

        <Row className="m-5">
        {
        posts.map((post, index) => { return(
          <Col md={4} key={index} className='my-3'>
            <PostBox 
              id={post.id} 
              category={post.category} 
              title={post.title} 
              img={Thumb} 
              categoryLink={post.categoryLink} 
            />
          </Col>
        )})
        }
        </Row>

      </Container>
    </div>
  );
}

export default Homepage;
