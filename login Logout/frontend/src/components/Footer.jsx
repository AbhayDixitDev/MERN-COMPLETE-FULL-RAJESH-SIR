import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaClock, FaHistory, FaStopwatch, FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

const FixedFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #343a40;
  color: white;
  font-size: 0.8rem;
  padding: 10px 0;
`;

const Footer = () => {
  const features = [
    { icon: <FaClock />, title: 'Precision Timekeeping' },
    { icon: <FaHistory />, title: 'Rich Heritage' },
    { icon: <FaStopwatch />, title: 'Modern Technology' },
    { icon: <FaCalendarAlt />, title: 'Perpetual Calendars' },
  ];

  return (
    <FixedFooter>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <small>© {new Date().getFullYear()} Chronos Timepieces</small>
          </Col>
          <Col md={6}>
            <ul className="list-inline mb-0 text-center text-md-end">
              {features.map((feature, index) => (
                <li key={index} className="list-inline-item me-3">
                  <span className="me-1">{feature.icon}</span>
                  {feature.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </FixedFooter>
  );
}

export default Footer;