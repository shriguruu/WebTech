// PostCard component to display individual blog post details

import { Card, Button } from 'react-bootstrap';

function PostCard({ title, description }) {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="mt-auto">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;