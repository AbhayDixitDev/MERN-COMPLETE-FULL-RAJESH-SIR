import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaClock, FaHistory, FaStopwatch, FaCalendarAlt } from 'react-icons/fa';

const Footer = () => {
  const features = [
    { icon: <FaClock />, title: 'Precision Timekeeping', description: 'Our clocks are engineered for ultimate accuracy' },
    { icon: <FaHistory />, title: 'Rich Heritage', description: 'Centuries of clockmaking tradition in every piece' },
    { icon: <FaStopwatch />, title: 'Modern Technology', description: 'Cutting-edge features meet classic design' },
    { icon: <FaCalendarAlt />, title: 'Perpetual Calendars', description: 'Never miss a date with our advanced calendar systems' },
  ];

  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Chronos Timepieces</h5>
            <p>
              Discover the art of timekeeping with our exquisite collection of clocks and watches.
              From classic grandfather clocks to modern smart watches, we offer a timeless blend of tradition and innovation.
            </p>
          </Col>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Our Features</h5>
            <ul className="list-unstyled mb-0">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <span className="me-2">{feature.icon}</span>
                  {feature.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="#!"> Chronos Timepieces</a>
      </div>
    </footer>
  );
}

export default Footer;