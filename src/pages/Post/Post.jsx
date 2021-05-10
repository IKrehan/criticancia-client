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
  }, [slug]);

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
        <div className="m-5">
          <div className="mt-5">
            <h3 className="text-white text-center text-wrap fw-bold">
              {post.title}
            </h3>
            <div className="mx-auto text-center text-white">
              Criado em {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="mx-auto my-4">
              <img
                className="rounded mx-auto d-block"
                src={post.thumbnail}
                alt={post.slug}
              />
            </div>
            <div className="mx-5">
              <div className="text-center mx-auto text-wrap w-75 text-white">
                {post.content}
              </div>
            </div>
          </div>
        </div>
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
