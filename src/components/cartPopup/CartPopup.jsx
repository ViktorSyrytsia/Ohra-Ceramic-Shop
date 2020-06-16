import React from 'react';

import { Button, Image, List } from 'semantic-ui-react';

const CartComponent = ({ items, removeFromCart }) => {

        const tip = 'Press "Add to cart" button, to add some items here...';

        return (
                <List selection divided verticalAlign='middle'>
                        {items.length > 0 ? items.map((item, index) => (
                                <List.Item key={Math.floor(Math.random() * 10000)}>
                                        <List.Content floated='right'>
                                                <Button onClick={() => removeFromCart(item.id)} color='orange'>Remove</Button>
                                        </List.Content>
                                        <Image avatar src={item.image} />
                                        <List.Content>{item.title}</List.Content>
                                </List.Item>
                        )) : tip}
                </List>
        )

}

export default CartComponent;