import { useState, useEffect } from "react";
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Thumb from '../../assets/imgs/thumb.jpg';
import Shape from '../../assets/imgs/shape.svg';
import SectionHeader from '../../components/SectionHeader/SectionHeader';


function Homepage() {
  const [isLoaded, setiILoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://criticancia-api.herokuapp.com/api/news/`, {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then(response => {
      setPosts(response.data.data);
    })
    .catch(error => console.log(error))

    axios.get(`https://criticancia-api.herokuapp.com/api/category`, {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then(response => {
      setCategories(response.data.data);
    })
    .catch(error => console.log(error))

    setiILoaded(true);
    }, [posts, categories]);


  return (
    <div className='home-box mt-n3' style={{
      backgroundImage: `url(${Shape})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }}>
      {/* <img src={Shape} className='background-shape' alt="Backgorund shape"/> */}
      <Container className='pt-4' fluid>
        <NavBar />

        <Row className='m-5'>
          <Col className='m-5'>
            <PostBox 
              category='Filmes' 
              title='Title goes here!' 
              img={Thumb} 
              id="1" 
              categoryLink='/filmes' 
            />
          </Col>

          <Col className='m-5'>
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
          {posts.map((post, index) => { return(
            <Col md={3} key={index} className='my-3'>
              <PostBox 
                id={post.id} 
                category={categories[post.categoryId-1].title}
                title={post.title} 
                img={Thumb} 
                categoryLink={categories[post.categoryId-1].path} 
              />
            </Col>
          )})}
        </Row>

      </Container>
    </div>
    );
}

export default Homepage;
