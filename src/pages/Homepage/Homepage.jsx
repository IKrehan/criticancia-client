import { useState, useEffect } from "react";
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";

import NavBar from '../../components/NavBar/Navbar';
import PostBox from '../../components/PostBox/PostBox';
import Shape from '../../assets/imgs/shape.svg';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Feed from "../../components/Feed/Feed";


function Homepage() {
  const [isLoaded, setiILoaded] = useState(false);
  const [postsHome, setPostsHome] = useState([]);


  useEffect(() => {
    axios.get(`https://criticancia-api.herokuapp.com/api/news/`, {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then(response => {
      setPostsHome(response.data.data);
    })
    .catch(error => console.log(error))

    setiILoaded(true);
    }, []);


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
          {
          (postsHome.slice(0, 2)).map((post) => {
            return (<Col className='m-5'>
              <PostBox 
                category={post.category} 
                title={post.title} 
                img={post.thumbnail}
                id={post.id}
                categoryLink={post.categoryPath}
              />
          </Col>)
          })
          }
        </Row>

        <SectionHeader title="Last News" />

        <Feed posts={postsHome.slice(2)} />

      </Container>
    </div>
    );
}

export default Homepage;
