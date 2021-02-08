// src/screens/ProductScreenSingle.js

import React from 'react'
import products from '../products'

function ProductScreenSingle({ match }) {
  const product = products.find((p) => p._id == match.params.id)
  return <div>{product.name}</div>
}

export default ProductScreenSingle
