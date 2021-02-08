// src/screens/ProductScreenSingle.js

import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Image } from 'react-bootstrap'
import products from '../products'

function ProductScreenSingle({ match }) {
  const product = products.find((p) => p._id == match.params.id)
  return (
    <div>
      <Link to="/">Go Back &larr;</Link>
      <br />
      {product.name}
      <Row>
        <Image src={product.image} alt={product.name} />
      </Row>
    </div>
  )
}

export default ProductScreenSingle
