import React from 'react';


import { Icon } from 'semantic-ui-react';

import './Footer.scss';

export default function Footer() {
        return (

                <div className='footer'>
                        <div className='footer-social-media'>
                                <Icon size='large' bordered color='blue' name='facebook' />
                                <Icon size='large' bordered color='blue' name='instagram' />
                                <Icon size='large' bordered color='blue' name='google' />
                                <Icon size='large' bordered color='blue' name='telegram plane' />
                        </div>
                        <div className='footer-copyright'>
                                © 2020 Syrytsia Viktor. All rights reserved.
                        </div>
                </div>


        )
}
