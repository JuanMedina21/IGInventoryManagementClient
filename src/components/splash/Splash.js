import React from 'react'
import ProductIndex from '../products/ProductIndex'

const Splash = (props) => {
  return (
      <div>
          <ProductIndex token={props.sessionToken} />
      </div>
  ) 
}

export default Splash;