import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import './itemCard.scss';


const ItemCard = ({ item, addToCart }) => {

        const { title, author, image, price, } = item;

        const buttonGroup = (
                <div className='button-group'>

                        <Button.Group fluid>
                                <Button className='buy-button' color='teal'>Buy now</Button>
                                <Button onClick={() => addToCart(item)} className='add-button' color='brown'>Add to cart</Button>
                        </Button.Group>
                </div>
        )

        const description = (
                <div>
                        <div>Example text of item description</div>
                        <h3>Price: {price}</h3>
                </div>

        )

        return (
                <Card
                        image={image}
                        header={title}
                        meta={author}
                        description={description}
                        extra={buttonGroup}
                />
        )
}

export default ItemCard
