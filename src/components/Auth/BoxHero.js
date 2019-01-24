import React from 'react';
import Radium from 'radium';
import Auth from './Auth';

const styles = {
    boxhero: {
        backgroundColor: '#E4E4E5',
        height: '85vh',
        textAlign: 'center',
        paddingTop: '8em',
    }
}
const BoxHero = () => {
    return(
        <div style={styles.boxhero}>
        <Auth/>
        </div>
    )
}


export default Radium(BoxHero);