import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Router>
            <ul>
              <li>
                <LinkContainer to="/">
                  <Button>Home</Button>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/about">
                  <Button>About</Button>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to="/topics">
                  <Button>Topics</Button>
                </LinkContainer>
              </li>
            </ul>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
