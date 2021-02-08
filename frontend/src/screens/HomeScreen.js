// src/screens/HomeScreen.js

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {<Product product_properties={product} />}
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
