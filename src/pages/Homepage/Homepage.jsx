import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";

import { Container, Row, Col } from "react-bootstrap";

import NavBar from "../../components/NavBar/Navbar";
import PostBox from "../../components/PostBox/PostBox";
import Shape from "../../assets/imgs/shape.svg";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Feed from "../../components/Feed/Feed";
import Loading from "../../components/Loading/Loading";

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [postsHome, setPostsHome] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://criticancia-api.herokuapp.com/api/news?perPage=2&currentPage=1`,
        {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        }
      )
      .then((response) => {
        setPostsHome(response.data.data.news);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://criticancia-api.herokuapp.com/api/news?perPage=10&currentPage=1`,
        {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        }
      )
      .then((response) => {
        setPosts(response.data.data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return isLoaded ? (
    <div
      className="home-box mt-n3 w-100"
      style={{
        backgroundImage: `url(${Shape})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container
        className="pt-4 px-lg-5 w-100 position-relative home-container"
        fluid
      >
        <NavBar />

        <Row className="px-lg-4 pb-5 mx-lg-auto">
          {postsHome.slice(0, 2).map((post) => {
            return (
              <Col sm={6} className="mx-auto">
                <div className="mx-lg-3 my-2 my-lg-0">
                  <PostBox
                    category={post.category.title}
                    title={post.title}
                    slug={post.slug}
                    img={post.thumbnail}
                    id={post.id}
                    categoryLink={post.category.path}
                  />
                </div>
              </Col>
            );
          })}
        </Row>

        <SectionHeader title="Last News" />

        <Feed posts={posts.news} />
      </Container>
    </div>
  ) : (
    <div
      className="home-box mt-n3 w-100"
      style={{
        backgroundImage: `url(${Shape})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container className="pt-4 w-100 h-100" fluid>
        <NavBar />
        <div className="load-box">
          <Loading />
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
