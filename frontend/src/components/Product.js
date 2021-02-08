// src/components/Product.js

import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product_properties }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product_properties._id}`}>
        <Card.Img src={product_properties.image} />
      </a>

      <Card.Body>
        <a href={`/product/${product_properties._id}`}>
          <Card.Title as="div">
            <strong>{product_properties.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="h3">${product_properties.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
