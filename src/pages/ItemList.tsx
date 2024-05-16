import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCartContext } from '../context/ShoppingCartContext'

type ItemLIst = {
    id:number,
    title:string,
    image:string,
    description:string,
    price:number
}

const ItemList = ({id,title,image,description,price} : ItemLIst) => {
    const {getItem, incrementItem, decrementItem, removeItem} = useShoppingCartContext()
    let quantity = getItem(id)
  return (
    <div>  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">price :<h5>{price}</h5> </Card.Footer>
      {quantity > 0 ? <><Card.Footer> <Button variant="primary" onClick={()=>incrementItem(id)}>+</Button>
       {quantity}
      <Button onClick={()=>decrementItem(id)}>-</Button></Card.Footer>
      <Button variant='danger' onClick={()=>removeItem(id)}>Remove</Button></> : <Button variant='primary' onClick={()=>incrementItem(id)}>Add to cart</Button>  }
     
  </Card>
  </div>
  )
}

export default ItemList