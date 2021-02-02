import { Container, Row, Col } from "react-bootstrap";

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Thumb from '../../assets/imgs/thumb.jpg';
import Shape from '../../assets/imgs/shape.svg';

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

function Category(props) {
  return (
    <div className="mt-n3" style={{
      backgroundImage: `url(${Shape})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }}>
      <Container className='pt-4' fluid>
        <NavBar category={props.category} />

        <Row className="m-5">
        {
        posts.map((post, index) => { return(
          <Col md={3} key={index} className='my-3'>
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

export default Category;
