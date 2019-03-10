import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
    return (
      <div className='Header'> 
        <h2>Portfolio</h2>
        <h2>About</h2>
        <h1> Oliver Parkinson</h1>	
        <h2>Links</h2>
        <h2>Contant</h2>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
