import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Row className="mb-5">
        <Col lg="8" className="mx-auto text-center">
          <h1 className="display-4 text-primary mb-4">
            Welcome to Intern Starter Template
          </h1>
          <p className="lead text-muted mb-4">
            A comprehensive React TypeScript starter template designed specifically 
            for interns and junior developers. Learn modern web development practices 
            with this educational platform.
          </p>
          <Button color="primary" size="lg" tag={Link} to="/example" className="me-3">
            View Examples
          </Button>
          <Button color="outline-primary" size="lg" tag={Link} to="/about">
            Learn More
          </Button>
        </Col>
      </Row>

      {/* About Section */}
      <Row className="mb-5">
        <Col lg="10" className="mx-auto">
          <h2 className="text-center mb-4">What This Template Offers</h2>
          <Row>
            <Col md="4" className="mb-4">
              <Card className="h-100 text-center">
                <CardBody>
                  <div className="mb-3">
                    <i className="fas fa-code fa-3x text-primary"></i>
                  </div>
                  <CardTitle tag="h5">Modern React</CardTitle>
                  <CardText>
                    Built with React 18, TypeScript, and functional components 
                    using modern hooks and best practices.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="h-100 text-center">
                <CardBody>
                  <div className="mb-3">
                    <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                  </div>
                  <CardTitle tag="h5">Responsive Design</CardTitle>
                  <CardText>
                    Bootstrap 5 integration with Reactstrap components for 
                    mobile-first responsive design.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="h-100 text-center">
                <CardBody>
                  <div className="mb-3">
                    <i className="fas fa-graduation-cap fa-3x text-primary"></i>
                  </div>
                  <CardTitle tag="h5">Educational</CardTitle>
                  <CardText>
                    Comprehensive documentation and examples to help interns 
                    learn and build amazing projects.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Statistics Section */}
      <Row className="bg-light py-5 rounded">
        <Col lg="10" className="mx-auto">
          <h2 className="text-center mb-4">Template Statistics</h2>
          <Row className="text-center">
            <Col md="4" className="mb-3">
              <h3 className="text-primary">100+</h3>
              <p className="text-muted">Projects Built</p>
            </Col>
            <Col md="4" className="mb-3">
              <h3 className="text-primary">50+</h3>
              <p className="text-muted">Contributors</p>
            </Col>
            <Col md="4" className="mb-3">
              <h3 className="text-primary">5</h3>
              <p className="text-muted">Years of Development</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
