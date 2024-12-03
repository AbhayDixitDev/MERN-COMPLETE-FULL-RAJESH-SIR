import React from 'react';
import { Container, Row, Col, Card, Carousel, Image, Button } from 'react-bootstrap';
import { FaClock, FaHistory, FaStopwatch, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const carouselItems = [
    { 
      image: 'https://cdn.pixabay.com/photo/2021/11/28/15/32/clock-6830535_1280.jpg',
      title: 'Timeless Elegance',
      description: 'Discover our collection of classic timepieces'
    },
    { 
      image: 'https://media.istockphoto.com/id/1300836721/photo/close-up-view-of-hourglass-measuring-time-on-wooden-table.jpg?s=612x612&w=0&k=20&c=ZDpNkmjFKy5wZyYbyU6oSs9fg_2Bn_JRRytWW2TOrqk=',
      title: 'Precision Timekeeping',
      description: 'Experience the accuracy of our modern chronographs'
    },
    { 
      image: 'https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_960_720.jpg',
      title: 'Vintage Charm',
      description: 'Explore our curated selection of antique timepieces'
    },
  ];

  const features = [
    { icon: <FaClock />, title: 'Precision Timekeeping', description: 'Our clocks are engineered for ultimate accuracy' },
    { icon: <FaHistory />, title: 'Rich Heritage', description: 'Centuries of clockmaking tradition in every piece' },
    { icon: <FaStopwatch />, title: 'Modern Technology', description: 'Cutting-edge features meet classic design' },
    { icon: <FaCalendarAlt />, title: 'Perpetual Calendars', description: 'Never miss a date with our advanced calendar systems' },
  ];

  return (
    <Container fluid className="p-0">
      <Carousel className="mb-5">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center mb-4">Welcome to Chronos Timepieces</h1>
            <p className="lead text-center">
              Discover the art of timekeeping with our exquisite collection of clocks and watches.
              From classic grandfather clocks to modern smart watches, we offer a timeless blend of tradition and innovation.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {features.map((feature, index) => (
            <Col md={3} key={index}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <div className="display-4 mb-3">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <h2>Our Heritage</h2>
            <p>
              For over two centuries, Chronos Timepieces has been at the forefront of horological innovation.
              Our master craftsmen blend time-honored techniques with cutting-edge technology to create
              timepieces that are not just instruments of precision, but works of art.
            </p>
            <Button variant="outline-primary">Learn More About Our History</Button>
          </Col>
          <Col md={6}>
            <Image src="https://cdn.pixabay.com/photo/2017/11/19/07/30/clock-2961952_1280.jpg" fluid rounded />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="order-md-2">
            <h2>Craftsmanship & Innovation</h2>
            <p>
              Each Chronos timepiece is a testament to the pinnacle of watchmaking artistry.
              Our dedication to precision is matched only by our commitment to innovation,
              ensuring that every clock and watch we produce is both a link to the past and a step into the future.
            </p>
            <Button variant="outline-primary">Explore Our Collections</Button>
          </Col>
          <Col md={6} className="order-md-1">
            <Image src="https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_1280.jpg" fluid rounded />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title as="h2">Visit Our Showroom</Card.Title>
                <Card.Text>
                  Experience the Chronos difference in person. Our expert staff are ready to guide you
                  through our extensive collection and help you find the perfect timepiece to mark life's
                  most precious moments.
                </Card.Text>
                <Button variant="primary">Book an Appointment</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;