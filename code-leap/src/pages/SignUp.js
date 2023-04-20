import { useState } from "react";
import { Container, Card, Form, Button, Stack } from "react-bootstrap";

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
      <Stack gap={4} className="col-md-5 mx-auto">
        <Card>
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
      </Stack>
    </Container>
    </>
  );
}

export default SignUp;