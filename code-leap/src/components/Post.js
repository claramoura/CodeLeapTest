import { Card } from "react-bootstrap";
import EditModal from "../components/EditModal.js";
import DeleteModal from "../components/DeleteModal.js";
import { timeElapsed } from "../time.js";

function Post(props) {

  const time_passed = timeElapsed(props.data.created_datetime);

  return (
    <>
    <Card>
      <Card.Header id="post-header" as="h5">
        {props.data.title}
        {(props.user && props.data.username === props.user) &&
          <>
          <EditModal post={props.data} />
          <DeleteModal postId={props.data.id} />
          </>
        }
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          <span>@{props.data.username}</span>
          <span className="float-end">{time_passed}</span>
        </Card.Subtitle>
        <Card.Text>{props.data.content}</Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}


export default Post; 