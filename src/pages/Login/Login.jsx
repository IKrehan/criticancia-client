// import { Container } from './styles';

import "./Login.css";
import Logo from "../../assets/imgs/logo.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container className="" fluid>
      <Row className="parent">
        <Col md={3} className="mx-2 logoBox">
          <div className="">
            <img alt="Logo" className="logo d-inline" src={Logo} />
            <h1 className="d-inline align-bottom bold">riticância</h1>
          </div>
          <h4 className="mt-5">
            Faça o login para acessar a área de administração.
          </h4>
        </Col>
        <Col className="box-login mt-5 mx-4" md={3}>
          <Form className="px-5 py-5 form-login">
            <Form.Group controlId="email">
              <Form.Control
                className="login-control m"
                size="lg"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control
                className="login-control"
                size="lg"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className="btn-login w-100 mt-4"
              variant="dark"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
