import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import Items from '../data/Items.json'

const ShoppingCart = ({isOpen}) => {

    const {cardItems, closeCart} = useShoppingCartContext()

  return (
    <div>
          <Offcanvas show={isOpen} onHide={closeCart} responsive="lg">
        <Offcanvas.Header closeButton={closeCart}>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cardItems.map(item=>(
            <CartItem key={item.id} {...item}/>
          ))}
              <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {
              cardItems.reduce((total, cartItem) => {
                const item = Items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            }
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default ShoppingCart