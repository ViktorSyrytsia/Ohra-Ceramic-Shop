import React, { useState } from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react';
import CartPopup from '../cartPopup/CartPopup';

const Header = ({ totalPrice, totalItems, items, removeFromCart }) => {

        const [color, setColor] = useState('brown');
        const [activeItem, setActiveItem] = useState('home');

        const handleItemClick = (e, { name }) => {
                setActiveItem(name)
        }

        const onColorChange = () => {
                if (color === 'brown') {
                        setColor('teal')
                } else setColor('brown')
        }



        return (
                <Menu size='massive' color={color} inverted widths={4}>
                        <Menu.Item
                                name='O H R A'
                                onClick={onColorChange}
                        />
                        <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={handleItemClick}
                        />
                        <Menu.Item
                                name='about'
                                active={activeItem === 'about'}
                                onClick={handleItemClick}
                        />
                        <Popup
                                content='Add users to your feed'
                                trigger={<Menu.Item
                                ><span className="item">{<Icon name='shopping cart' size='large' />} Total:{totalPrice} Items:{totalItems}</span> </Menu.Item>}
                                content={<CartPopup items={items} removeFromCart={removeFromCart} />}
                                on='click'
                                hideOnScroll
                        >

                        </Popup>
                </Menu>
        )
}

export default Header
