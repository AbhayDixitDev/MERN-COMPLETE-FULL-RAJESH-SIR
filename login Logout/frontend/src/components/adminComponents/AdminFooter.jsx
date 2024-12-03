import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTools, FaChartLine, FaUsers, FaCog } from 'react-icons/fa';
import '../../css/admin.css';


const AdminFooter = () => {
  const adminFeatures = [
    { icon: <FaTools />, title: 'System Management' },
    { icon: <FaChartLine />, title: 'Analytics Dashboard' },
    { icon: <FaUsers />, title: 'User Management' },
    { icon: <FaCog />, title: 'Configuration' },
  ];

  return (
    <footer className="fixed-footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <small>© {new Date().getFullYear()} Admin Panel: Chronos Timepieces</small>
          </Col>
          <Col md={6}>
            <ul className="list-inline mb-0 text-center text-md-end">
              {adminFeatures.map((feature, index) => (
                <li key={index} className="list-inline-item me-3">
                  <span className="me-1">{feature.icon}</span>
                  {feature.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AdminFooter;

