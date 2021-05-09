import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import NavBar from "../../components/NavBar/Navbar";
import Shape from "../../assets/imgs/shape.svg";
import { useState, useEffect } from "react";
import Feed from "../../components/Feed/Feed";

function Category(props) {
  const [isLoaded, setiILoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://criticancia-api.herokuapp.com/api/news/${props.category}`, {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      })
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => console.log(error));

    setiILoaded(true);
  }, [props]);

  if (isLoaded) {
    return (
      <div
        className="mt-n3"
        style={{
          backgroundImage: `url(${Shape})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Container className="pt-4" fluid>
          <NavBar category={props.category} />
          <Feed posts={posts} />
        </Container>
      </div>
    );
  } else {
    return (
      <div
        className="mt-n3"
        style={{
          backgroundImage: `url(${Shape})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Container className="pt-4" fluid>
          <NavBar category={props.category} />
          <Row className="m-5 justify-content-center">
            <Col md={12} className="my-3 justify-content-center">
              <h1 style={{ color: "white" }}>Loading...</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Category;
