import React from 'react'
import ProductIndex from '../products/ProductIndex'
import './Splash.css'

const Splash = (props) => {
  return (
      <div className="splash">
          <ProductIndex token={props.sessionToken} />
      </div>
  ) 
}

export default Splash;