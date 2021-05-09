import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import axios from "axios";

import "./Post.css";
import NavBar from "../../components/NavBar/Navbar";
import Shape from "../../assets/imgs/shape.svg";
import Loading from "../../components/Loading/Loading";

function Post() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`https://criticancia-api.herokuapp.com/api/news/${slug}`, {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      })
      .then((response) => {
        setPost(response.data.data);
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
      <Container className="pt-4 w-100 position-relative" fluid>
        <NavBar />
        <h1>{post.title}</h1>
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

export default Post;
