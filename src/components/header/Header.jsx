import React, { useEffect, useState } from 'react'
import { Popup, Icon } from 'semantic-ui-react';
import CartPopup from '../cartPopup/CartPopup';

import './Header.scss';


const Header = ({ totalPrice, totalItems, items, removeFromCart }) => {

        const [width, setWidth] = useState(window.innerWidth);
        const [mobileClass, setMobileClass] = useState('header-container');

        useResponse(setWidth, width, setMobileClass);





        return (


                <div className={mobileClass} >
                        <div className='header-logo'>
                                <div className='logo'>OHRA</div>
                        </div>
                        <div className='header-menu'>
                                <div className='header-menu-item'>Main</div>
                                <div className='header-menu-item'>Workshop</div>
                                <div className='header-menu-item'>About us</div>
                        </div>
                        <div className='header-cart'>
                                <div className='header-cart-container'>
                                        <Popup
                                                content='Add users to your feed'
                                                trigger={
                                                        <div className='trigger-container'>
                                                                <span className="cart-icon"><Icon name='shopping cart' size='big' /></span>
                                                                <span className="total-circ">{totalItems}</span>
                                                        </div>

                                                }
                                                content={
                                                        <CartPopup items={items} removeFromCart={removeFromCart} />}
                                                on='click'
                                                hideOnScroll>
                                        </Popup>
                                </div>

                        </div>
                </div >
                // <Menu size='massive' color={color} inverted widths={4}>
                //         <Menu.Item
                //                 name='O H R A'
                //                 onClick={onColorChange}
                //         />
                //         <Menu.Item
                //                 name='home'
                //                 active={activeItem === 'home'}
                //                 onClick={handleItemClick}
                //         />
                //         <Menu.Item
                //                 name='about'
                //                 active={activeItem === 'about'}
                //                 onClick={handleItemClick}
                //         />
                //         <Popup
                //                 content='Add users to your feed'
                //                 trigger={<Menu.Item
                //                 ><span className="item">{<Icon name='shopping cart' size='large' />} Total:{totalPrice} Items:{totalItems}</span> </Menu.Item>}
                //                 content={<CartPopup items={items} removeFromCart={removeFromCart} />}
                //                 on='click'
                //                 hideOnScroll
                //         >

                //         </Popup>
                // </Menu>
        )
}

export default Header;

const useResponse = (setWidth, width, setMobileClass) => {
        useEffect(() => {
                const handleResize = () => setWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
        })
        useEffect(() => {
                const handleMobileCLass = (width) => {
                        if (width < 1000) {
                                return 'header-container-mob';
                        } else {
                                return 'header-container'
                        }
                }
                setMobileClass(handleMobileCLass(width))
        })
}
