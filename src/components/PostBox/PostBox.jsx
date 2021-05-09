import { Card } from "react-bootstrap";
import "./PostBox.css";

function PostBox(props) {
  return (
    <Card className="post-card hvr-grow animate__slideInDown">
      <img
        src={props.img}
        alt="Thumbnail"
        className={`p-2 mb-n3 thumb${
          props.thumbType ? "-" + props.thumbType : ""
        }`}
      />
      <Card.Body>
        <a href={props.categoryLink} className="category p-1">
          {props.category}
        </a>

        <a href={"/post/" + props.id}>
          <Card.Title className="title my-3">{props.title}</Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
}

export default PostBox;
