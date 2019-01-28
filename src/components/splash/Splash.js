import React from 'react'
import ProductIndex from '../products/ProductIndex'
import './Splash.css'

const Splash = (props) => {
    return (
        <div id="splash">
            <div>
                <ProductIndex token={props.sessionToken} />
            </div>
        </div>
    )
}

export default Splash;