import { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { submitPost } from "../actions/submitPost.js";

function NewPost(props) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [disabled, setDisabled] = useState(true)

  const dispatch = useDispatch()

  const handleTitle = (title) => {
    setTitle(title)
  }

  const handleContent = (content) => {
    setContent(content)
  }

  const create = () => {
    dispatch(submitPost(props.user, title, content));
    window.location.reload();
  }

  useEffect(() => {
    if (title === "" || title[0] === ' ' || content === "" || content[0] === ' ') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [title, content])

  return (
    <>
    <Card>
      <Card.Body>
        <Card.Title>What's on your mind?</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Hello world"
              onInput={(e) => handleTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control 
              as="textarea"
              rows={3} 
              placeholder="Content here"
              onInput={(e) => handleContent(e.target.value)}
            />
          </Form.Group>
          <Button
            className="float-end" 
            variant="primary" 
            type="button"
            disabled={disabled}
            onClick={() => create()}
          >
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  );
}

export default NewPost;