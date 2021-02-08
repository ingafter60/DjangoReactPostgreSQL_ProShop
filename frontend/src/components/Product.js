// components/Product.js
import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

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
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product_properties.rating}
              text={`${product_properties.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product_properties.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
