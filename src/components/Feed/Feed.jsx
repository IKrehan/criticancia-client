import { Row, Col } from "react-bootstrap";

import PostBox from "../PostBox/PostBox";

function Feed(props) {
  return (
    <Row className="m-5">
      {props.posts.map((post, index) => {
        return (
          <Col md={3} key={index} className="my-3">
            <PostBox
              key={index}
              id={post.id}
              category={post.category.title}
              title={post.title}
              img={post.thumbnail}
              categoryLink={post.category.path}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default Feed;
