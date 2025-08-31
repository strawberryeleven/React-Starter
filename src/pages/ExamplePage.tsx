import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Alert,
  Badge,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const ExamplePage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setShowAlert(true);
    setCounter(prev => prev + 1);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const technologies = [
    { name: 'React 18', description: 'Latest React with concurrent features' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development' },
    { name: 'Vite', description: 'Fast build tool and development server' },
    { name: 'React Router', description: 'Declarative routing for React' },
    { name: 'Bootstrap 5', description: 'Popular CSS framework' },
    { name: 'Reactstrap', description: 'Bootstrap components for React' },
  ];

  return (
    <Container>
      <Row className="mb-4">
        <Col lg="8" className="mx-auto text-center">
          <h1 className="display-5 text-primary mb-3">Example Page</h1>
          <p className="lead text-muted">
            This page demonstrates various React patterns and TypeScript features 
            that interns can learn from and build upon.
          </p>
        </Col>
      </Row>

      {/* Interactive Examples */}
      <Row className="mb-5">
        <Col lg="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                State Management Example
                <Badge color="secondary" className="ms-2">Interactive</Badge>
              </CardTitle>
              <CardText>
                This demonstrates useState hook and event handling in TypeScript.
              </CardText>
              <Button 
                color="primary" 
                onClick={handleButtonClick}
                className="mb-3"
              >
                Click me! (Clicked {counter} times)
              </Button>
              {showAlert && (
                <Alert color="success" className="mb-0">
                  <strong>Great!</strong> You've successfully triggered a state update.
                </Alert>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col lg="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Component Structure
                <Badge color="info" className="ms-2">Learn</Badge>
              </CardTitle>
              <CardText>
                This page is a functional component using TypeScript interfaces 
                and proper typing for props and state.
              </CardText>
              <div className="bg-light p-3 rounded">
                <code className="text-dark">
                  {`const ExamplePage: React.FC = () => {
  const [state, setState] = useState<number>(0);
  return <div>...</div>;
};`}
                </code>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Technologies Used */}
      <Row className="mb-5">
        <Col lg="8" className="mx-auto">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
                Technologies Used in This Template
              </CardTitle>
              <ListGroup flush>
                {technologies.map((tech, index) => (
                  <ListGroupItem key={index} className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{tech.name}</div>
                      <small className="text-muted">{tech.description}</small>
                    </div>
                    <Badge color="primary" pill>✓</Badge>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Learning Objectives */}
      <Row>
        <Col lg="10" className="mx-auto">
          <Card className="bg-light">
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
                What You Can Learn From This Example
              </CardTitle>
              <Row>
                <Col md="6" className="mb-3">
                  <h6 className="text-primary">React Concepts</h6>
                  <ul className="mb-0">
                    <li>Functional Components</li>
                    <li>useState Hook</li>
                    <li>Event Handling</li>
                    <li>Conditional Rendering</li>
                  </ul>
                </Col>
                <Col md="6" className="mb-3">
                  <h6 className="text-primary">TypeScript Features</h6>
                  <ul className="mb-0">
                    <li>Type Annotations</li>
                    <li>Interface Definitions</li>
                    <li>Generic Types</li>
                    <li>Type Safety</li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamplePage;
