import React, { useContext, useState } from 'react'
import Items from '../data/Items.json'
import { Button, Card, Col, Row } from 'react-bootstrap'
import ItemList from './ItemList'

const Product = () => {
  
  return (
    <div>
      <Row>
        {Items.map((item,id)=>(
          <Col key={item.id}>
        <ItemList {...item} />
          
        </Col>
        ))}

      </Row>
    </div>
  )
}

export default Product