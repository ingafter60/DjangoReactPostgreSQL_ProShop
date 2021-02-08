// src/screens/ProductScreenSingle.js

import React from 'react'
import { Row, Image } from 'react-bootstrap'
import products from '../products'

function ProductScreenSingle({ match }) {
  const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
      {product.name}
      <Row>
        <Image src={product.image} alt={product.name} />
      </Row>
    </div>
  )
}

export default ProductScreenSingle
