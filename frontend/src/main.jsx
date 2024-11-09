import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import NameContainer from './NameContainer';
import InfoContainer from './InfoContainer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <InfoContainer />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <NameContainer />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>
);
