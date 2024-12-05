import React, { useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaClock, FaImage } from 'react-icons/fa';
import axios from 'axios';
import WatchBackground from '../../threejs/WatchBackground';
import '../../css/admin.css';

const AdminAdd = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    image: null
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post('http://localhost:8080/admin/products/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Product added:', response.data);
      setProduct({ name: '', brand: '', price: '', description: '', image: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
    }
  };

  return (
    <Container fluid className="admin-add-container">
      <WatchBackground />
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop: "-50rem" }}>
        <Col md={6} lg={4}>
          <div className="bg-light p-4 rounded shadow" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="text-center mb-4"><FaPlus /> Add New Watch</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label><FaClock /> Watch Name</Form.Label>
                <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" name="brand" value={product.brand} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><FaImage /> Watch Image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleImageChange} ref={fileInputRef} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Add Watch
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAdd;
