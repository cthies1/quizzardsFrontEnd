import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  HouseFill,
  PeopleFill,
  SendFill,
  PersonCircle,
  QuestionSquareFill,
} from "react-bootstrap-icons";
import logo from "../images/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" class="mx0">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Quizzards
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/groupPage">GP</Nav.Link>
            <Nav.Link href="/quizPage">QP</Nav.Link>
            <Nav.Link href="/">
              <HouseFill class="mx-1 mb-1" />
              Home
            </Nav.Link>
            <Nav.Link href="/quizzes">
              <QuestionSquareFill class="mx-1 mb-1" />
              Quizzes
            </Nav.Link>
            <Nav.Link href="/groups">
              <PeopleFill class="mx-1 mb-1" />
              Groups
            </Nav.Link>
            <Nav.Link href="/messages">
              <SendFill class="mx-1 mb-1" />
              Messages
            </Nav.Link>
            <Nav.Link href="/profile">
              <PersonCircle class="mx-1 mb-1" />
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
