import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Thumb from '../../assets/imgs/thumb.jpg';
import Shape from '../../assets/imgs/shape.svg';
import { useState, useEffect } from "react";


function Category(props) {
  const [isLoaded, setiILoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    await axios.get(`https://criticancia-api.herokuapp.com/api/news/${props.category}`, {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then(response => {
      setPosts(response.data.data);
    })
    .catch(error => console.log(error))

    await axios.get(`https://criticancia-api.herokuapp.com/api/category`, {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then(response => {
      setCategories(response.data.data);
    })
    .catch(error => console.log(error))

    setiILoaded(true);
    }, [props, posts, categories]);
    if (isLoaded) {
      return (
        <div className="mt-n3" style={{
          backgroundImage: `url(${Shape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
          <Container className='pt-4' fluid>
            <NavBar category={props.category} />
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
    else {
      return (
        <div className="mt-n3" style={{
          backgroundImage: `url(${Shape})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
          <Container className='pt-4' fluid>
            <NavBar category={props.category} />
            <h1>Loading..</h1>
          </Container>
        </div>
      );
    }
}

export default Category;
