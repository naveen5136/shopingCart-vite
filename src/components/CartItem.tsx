import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import Items from '../data/Items.json';
import { useShoppingCartContext } from '../context/ShoppingCartContext';

const CartItem = ({ id, quantity }) => {
    const {removeItem} = useShoppingCartContext()
    const item = Items.find((i) => i.id === id);

    return (
        
            <Stack direction="horizontal" gap={3}>
                <img src={item.image} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
                <div className="me-auto">
                    <div>
                        {item?.title}{' '}
                        {quantity > 1 && (
                            <span className="text-muted" style={{ fontSize: '.65rem' }}>
                                x{quantity}
                            </span>
                        )}
                    </div>
                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                       {item.price}
        </div>
                </div>
                <div> {item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
            </Stack>
       
    );
};

export default CartItem;
