import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  HouseFill,
  PeopleFill,
  SendFill,
  PersonCircle,
  PatchQuestionFill,
} from "react-bootstrap-icons";
import logo from "../images/logo3.png";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" className="mx0">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="27"
              height="30"
              className="d-inline-block"
            />{" "}
            Quizzards
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/groupPage">GP</Nav.Link>
            <Nav.Link href="/quizPage">QP</Nav.Link>
            <Nav.Link href="/">
              <HouseFill className="mx-1 mb-1" />
              Home
            </Nav.Link>
            <Nav.Link href="/quizzes">
              <PatchQuestionFill className="mx-1 mb-1" />
              Quizzes
            </Nav.Link>
            <Nav.Link href="/groups">
              <PeopleFill className="mx-1 mb-1" />
              Groups
            </Nav.Link>
            <Nav.Link href="/messages">
              <SendFill className="mx-1 mb-1" />
              Messages
            </Nav.Link>
            <Nav.Link href="/profile">
              <PersonCircle className="mx-1 mb-1" />
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
