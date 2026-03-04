import React from "react";
import { Card, Button } from "react-bootstrap";

function UserCard({ user, onUserClick }) {
  return (
    <Card cclassName="user-card h-100">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>

        <Card.Text>
          <strong>Email:</strong> {user.email}
        </Card.Text>

        {/* TODO 3.1: Add ONE Bootstrap <Button> inside <Card.Body> */}
        <Button
          // onClick should call the handler and pass the current user
          onClick={() => onUserClick(user)}
        >
          View Details
        </Button>

      </Card.Body>
    </Card>
  );
}

export default UserCard;