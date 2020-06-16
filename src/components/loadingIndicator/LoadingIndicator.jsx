import React from 'react'
import { Loader } from 'semantic-ui-react'

import './LoadingIndicator.scss';

const LoadingIndicator = () => <div className='loader'><Loader size='massive' active inline='centered' /></div>

export default LoadingIndicator