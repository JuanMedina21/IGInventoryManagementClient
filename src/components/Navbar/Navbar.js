import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap';
import {
  Link,
} from 'react-router-dom';




//   http://paletton.com/#uid=53T0u0klblAazwDfTqUqrgmvNaZ
const styles = {
  navbar: {
    backgroundColor: '#275A6B',
    height: '15vh',
    position: 'relative',
    width: '100%',
  },

  brand: {
    color: 'white',
    paddingLeft: '1.5em',
    fontSize: '28px'
  },

  link: {
    color: 'white',
    paddingLeft: '1em',
    paddingRight: '1em',
    fontSize: '18px',
    textDecoration: 'none',
    paddingTop: '.3em'
  },

  button: {
    backgroundColor: '#27596C',
    borderColor: '#114052',
    color: '#AFB1B9',
    fontSize: '20px'
  },

  displayLinks: {
    display: 'flex',
    paddingRight: '3em'
  },

  logout: {
    marginLeft: '25px',
    backgroundColor: '#22B689'
  }


}



const Sitebar = (props) => (

  <div>
    <div>
      <Navbar light expand="md" style={styles.navbar}>
        <NavbarBrand href="/" style={styles.brand}>IG Inventory Management</NavbarBrand>

        <Nav className="ml-auto" navbar style={styles.displayLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/faq" style={styles.link}>FAQ</Link>
          <Button onClick={() => props.clickLogout()} type="button" style={styles.logout} id="logout">Logout</Button>
        </Nav>
      </Navbar>
    </div>
  </div>

)

export default Sitebar;