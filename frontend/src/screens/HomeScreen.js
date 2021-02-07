// src/screens/HomeScreen.js

import React from 'react'
import products from '../products'

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomeScreen
