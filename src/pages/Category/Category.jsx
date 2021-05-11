import { Container } from "react-bootstrap";
import axios from "axios";

import NavBar from "../../components/NavBar/Navbar";
import Shape from "../../assets/imgs/shape.svg";
import { useState, useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import Loading from "../../components/Loading/Loading";

function Category(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setPosts({});
    setIsLoaded(false);
    axios
      .get(
        `https://criticancia-api.herokuapp.com/api/news/?category=${props.category}`,
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
  }, [props]);

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
        <NavBar category={props.category} />
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
      <Container className="pt-4" fluid>
        <NavBar category={props.category} />
        <div className="load-box">
          <Loading />
        </div>
      </Container>
    </div>
  );
}

export default Category;
