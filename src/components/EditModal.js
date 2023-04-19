import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import EditIcon from "./EditIcon.js";
import { editPost } from "../actions/editPost.js";

function EditModal(props) {

  const [title, setTitle] = useState(props.post.title)
  const [content, setContent] = useState(props.post.content)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(editPost(props.post.id, title, content));
    setShow(false);
    window.location.reload();
  }

  return (
    <>
      <EditIcon onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p><b>Edit item</b></p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                value={title}
                contentEditable={true}
                onInput={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea"
                rows={3} 
                value={title}
                contentEditable={true}
                onInput={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;