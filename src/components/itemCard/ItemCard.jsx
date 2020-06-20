import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

import './itemCard.scss';


const ItemCard = ({ item, addToCart }) => {

        const { title, author, image, price, rating } = item;

        const ratingStars = (rating) => {
                let starsArray = [];
                for (let index = 0; index < rating; index++) {
                        starsArray.push(<Icon key={index + Math.floor(Math.random() * 1000)} color='yellow' name='star' />);
                }
                for (let index = rating; starsArray.length <= 5 - 1; index++) {
                        starsArray.push(<Icon key={index + Math.floor(Math.random() * 1000)} disabled color='yellow' name='star outline' />);
                }
                return starsArray;
        }

        const stars = ratingStars(rating);

        const buttonGroup = (
                <div className='button-group'>
                        <div className='stars-group'> {stars} </div>
                        <Button.Group fluid>
                                <Button className='buy-button' color='blue'>Buy now</Button>
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
