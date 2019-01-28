import React from 'react';

const styles = {
    boxhero: {
        backgroundColor: '#E4E4E5',
        height: '85vh',
        textAlign: 'center',
        paddingTop: '3em',
    },

    textStyle: {
        width: '70%', 
        marginLeft: '15%',
        marginTop: '5%',
        fontSize: 25
    }
}

const About = () => {
    return(
        <div style={styles.boxhero}>
            <h2>About</h2>
            <div style={styles.textStyle}>
                <p>IG Inventory Management is a simple app designed for small companies that need a way to store and keep track of products received. After the user has created a FREE account, the app will let the user create new, edit and delete products. </p>
            </div>
        </div>
    )
}





export default About