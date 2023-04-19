import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DeleteIcon from "./DeleteIcon.js";
import { deletePost } from "../actions/deletePost.js";

function DeleteModal(props) {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost(props.postId));
    setShow(false);
    window.location.reload();
  }

  return (
    <>
      <DeleteIcon onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <p><b>Are you sure you want to delete this item?</b></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;