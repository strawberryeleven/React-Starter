import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Progress,
  Badge,
} from 'reactstrap';

const AboutPage: React.FC = () => {
  const features = [
    { 
      title: 'Modern React Development', 
      progress: 100, 
      description: 'Built with React 18 and functional components using hooks'
    },
    { 
      title: 'TypeScript Integration', 
      progress: 100, 
      description: 'Full TypeScript support for type-safe development'
    },
    { 
      title: 'Responsive Design', 
      progress: 100, 
      description: 'Bootstrap 5 with Reactstrap for mobile-first design'
    },
    { 
      title: 'Development Tools', 
      progress: 100, 
      description: 'Vite for fast development and optimized builds'
    },
  ];

  const skillLevels = [
    {
      level: 'Beginner',
      color: 'success',
      skills: ['Component Structure', 'Props & State', 'Basic Hooks', 'JSX Syntax']
    },
    {
      level: 'Intermediate',
      color: 'warning',
      skills: ['Routing', 'Event Handling', 'API Integration', 'State Management']
    },
    {
      level: 'Advanced',
      color: 'danger',
      skills: ['Custom Hooks', 'Performance Optimization', 'Testing', 'Deployment']
    },
  ];

  return (
    <Container>
      <Row className="mb-4">
        <Col lg="8" className="mx-auto text-center">
          <h1 className="display-5 text-primary mb-3">About This Template</h1>
          <p className="lead text-muted">
            A comprehensive starter template designed to help interns and junior 
            developers learn modern React development with TypeScript.
          </p>
        </Col>
      </Row>

      {/* Template Image Placeholder */}
      <Row className="mb-5">
        <Col lg="6" className="mx-auto">
          <Card>
            <div 
              className="bg-primary text-white d-flex align-items-center justify-content-center"
              style={{ height: '300px' }}
            >
              <div className="text-center">
                <i className="fas fa-code fa-5x mb-3"></i>
                <h4>Intern Starter Template</h4>
                <p className="mb-0">Your journey to becoming a great developer starts here</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Statistics Cards */}
      <Row className="mb-5">
        <Col lg="10" className="mx-auto">
          <Row>
            <Col md="4" className="mb-4">
              <Card className="text-center h-100">
                <CardBody>
                  <div className="display-4 text-primary mb-3">100+</div>
                  <CardTitle tag="h5">Projects Created</CardTitle>
                  <CardText className="text-muted">
                    Successful projects built using this template by interns worldwide
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="text-center h-100">
                <CardBody>
                  <div className="display-4 text-primary mb-3">50+</div>
                  <CardTitle tag="h5">Contributors</CardTitle>
                  <CardText className="text-muted">
                    Developers who have contributed to improving this template
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="text-center h-100">
                <CardBody>
                  <div className="display-4 text-primary mb-3">5</div>
                  <CardTitle tag="h5">Years Active</CardTitle>
                  <CardText className="text-muted">
                    Years of continuous development and improvement
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Features Progress */}
      <Row className="mb-5">
        <Col lg="8" className="mx-auto">
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
                Template Features
              </CardTitle>
              {features.map((feature, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="mb-0">{feature.title}</h6>
                    <Badge color="success">Complete</Badge>
                  </div>
                  <p className="text-muted mb-2">{feature.description}</p>
                  <Progress value={feature.progress} color="primary" />
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Skill Development Path */}
      <Row className="mb-5">
        <Col lg="10" className="mx-auto">
          <h3 className="text-center mb-4">Learning Path for Interns</h3>
          <Row>
            {skillLevels.map((level, index) => (
              <Col md="4" key={index} className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <CardTitle tag="h5">
                      {level.level} Level
                      <Badge color={level.color} className="ms-2">{level.level}</Badge>
                    </CardTitle>
                    <CardText className="mb-3">
                      Skills you'll develop at this level:
                    </CardText>
                    <ul className="mb-0">
                      {level.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="mb-1">{skill}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Description */}
      <Row>
        <Col lg="8" className="mx-auto">
          <Card className="bg-light">
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
                Purpose & Benefits
              </CardTitle>
              <CardText>
                This template serves as a comprehensive foundation for React TypeScript 
                projects, specifically designed with interns and junior developers in mind. 
                It demonstrates industry best practices, modern development patterns, and 
                provides a solid structure that can be easily extended.
              </CardText>
              <CardText>
                Whether you're starting your first internship project, building a portfolio 
                piece, or learning React and TypeScript, this template provides the tools 
                and examples you need to succeed in modern web development.
              </CardText>
              <CardText className="mb-0">
                <strong>Ready to start building?</strong> Use this template as your foundation 
                and customize it to create amazing applications!
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
