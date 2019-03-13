import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
    return (
      <div className='Header'> 
        <a href="/#"><h2>Portfolio</h2></a>
        <a href="/#"><h2>About</h2></a>
        <h1> Oliver Parkinson</h1>
        <a href="/#"><h2>Links</h2></a>
        <a href="/#"><h2>Contact</h2></a>
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
