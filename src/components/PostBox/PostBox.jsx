import { Card } from "react-bootstrap";
import "./PostBox.css";

function PostBox({ title, slug, img, category, categoryLink, onFeed = false }) {
  return (
    <a href={"/post/" + slug}>
      <Card
        className={`post-card hvr-grow animate__slideInDown ${
          onFeed ? "post-feed" : ""
        } `}
      >
        <img src={img} alt="Thumbnail" className={`p-2 mb-n3 thumb`} />
        <Card.Body>
          <a href={categoryLink} className="category p-1">
            {category}
          </a>

          <Card.Title className="title my-3">{title}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
}

export default PostBox;
