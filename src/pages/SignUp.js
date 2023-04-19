import { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

function SignUp() {

  const [username, setUsername] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleEnter = () => {
    localStorage.setItem("user", username)
    window.location.reload()
  }

  const handleInput = (username) => {
    setUsername(username)
    if (username === "" || username[0] === ' ') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  return (
    <>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>Welcome to CodeLeap network!</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Please enter your username</Form.Label>
                  <Form.Control 
                  type="text" 
                  placeholder="John Doe"
                  onInput={(e) => handleInput(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className="float-end" 
                  variant="primary" 
                  type="button"
                  disabled={disabled}
                  onClick={() => handleEnter()}
                >
                  ENTER
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default SignUp;