import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import CartPopup from '../cartPopup/CartPopup';

import { Modal, Icon } from 'semantic-ui-react'

import './Header.scss';


const AppHeader = ({ totalPrice, totalItems, items, removeFromCart }) => {

        const [width, setWidth] = useState(window.innerWidth);
        const [mobileClass, setMobileClass] = useState('header-container');

        useResponse(setWidth, width, setMobileClass);





        return (


                <div className={mobileClass} >
                        <div className='header-logo'>
                                <div className='logo'>OHRA</div>
                        </div>
                        <div className='header-menu'>
                                <div className='header-menu-item'><Link to="/">Main</Link></div>
                                <div className='header-menu-item'><Link to="/workshop">Workshop</Link></div>
                                <div className='header-menu-item'><Link to="/about">About</Link></div>
                                <div className='header-menu-item'>
                                        <Modal trigger={<Link><Icon size='small' bordered inverted color='blue' name='tag' />Cart</Link>}>
                                                <Modal.Header>Your cart</Modal.Header>
                                                <Modal.Content>
                                                        <CartPopup items={items} removeFromCart={removeFromCart} totalPrice={totalPrice} />
                                                </Modal.Content>
                                        </Modal>
                                </div>
                        </div>




                </div >

        )
}

export default AppHeader;



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
