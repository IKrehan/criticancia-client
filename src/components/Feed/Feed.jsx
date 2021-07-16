import { Row, Col } from "react-bootstrap";

import PostBox from "../PostBox/PostBox";

function Feed(props) {
  return (
    <Row className="m-lg-5">
      {props.posts.map((post, index) => {
        return (
          <Col md={3} key={index} className="my-3">
            <PostBox
              key={index}
              id={post.id}
              category={post.category.title}
              title={post.title}
              slug={post.slug}
              img={post.thumbnail}
              categoryLink={post.category.path}
              onFeed={true}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default Feed;
