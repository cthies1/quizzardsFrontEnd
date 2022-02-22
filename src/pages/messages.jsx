import React from "react";
import Card from "react-bootstrap/Card";
function Messages() {
  return (
    <div className="messages">
      <div className="row">
        <div className="col-sm-3">
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-9">
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Messages;
