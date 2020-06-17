import React from 'react';


import { Button } from 'semantic-ui-react';
import './CartPopup.scss';

const CartComponent = ({ items, removeFromCart, totalPrice }) => {

        const tip = 'Press "Add to cart" button, to add some items here...';

        return (
                <div className='cart-list'>
                        {items.length > 0 ? items.map((item, index) => (
                                <div className='cart-list-item' key={Math.floor(Math.random() * 10000)}>
                                        <div className='cart-list-item-image'>
                                                <img src={item.image} />
                                        </div>
                                        <div className='cart-list-item-text'>
                                                <span className='item-title'>{item.title}</span><span className='item-count'>Items: 0</span></div>

                                        <div className='cart-list-item-button'>
                                                <Button basic color='orange' onClick={() => removeFromCart(item.id)} color='orange'>Remove</Button>
                                        </div>
                                </div>
                        )) : tip
                        }
                        <Button onClick={() => alert('This function not ready yet')} fluid basic color='teal' content={`Total price: ${totalPrice}`} />
                </div>
        )

}

export default CartComponent;



