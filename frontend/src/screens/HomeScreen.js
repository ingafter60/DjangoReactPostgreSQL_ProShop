// src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreen() {
  // set state of products, and use setProducts metdod = value of use state
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProduct() {
      // const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
      const { data } = await axios.get('/api/products/')
      // pass data when get api called
      setProducts(data)
    }

    // make a call and load the data
    fetchProduct()
  }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {<Product product_properties={product} />}
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
