import { Card } from 'react-bootstrap';
import './PostBox.css';

function PostBox(props) {
  return (
  <a href={'/post/' + props.id}>
      <Card className="post-card hvr-grow">
        <img src={props.img} className="p-2 mb-n3 thumb"/>
        <Card.Body>
        <a href={props.categoryLink} className="category p-1">{props.category}</a>
        <Card.Title className="title my-3">{props.title}</Card.Title>
        </Card.Body>
    </Card>
  </a>
  );
}

export default PostBox;