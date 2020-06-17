import React, { useEffect, useState } from 'react'
import { Popup } from 'semantic-ui-react';
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
                                                        <div className='cart-icons'>
                                                                <i aria-hidden="true" className="cart bordered icon"></i>
                                                                <i aria-hidden="true" className="bordered icon">{totalItems}</i>
                                                        </div>

                                                }
                                                content={
                                                        <CartPopup items={items} totalPrice={totalPrice} removeFromCart={removeFromCart} />}
                                                on='click'
                                                hideOnScroll>
                                        </Popup>
                                </div>

                        </div>
                </div >

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
