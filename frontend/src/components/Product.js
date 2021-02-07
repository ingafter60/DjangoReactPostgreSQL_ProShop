// src/components/Product.js

import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product_properties }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={product_properties.image} />
    </Card>
  )
}

export default Product
