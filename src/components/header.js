import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

//https://css-tricks.com/snippets/css/complete-guide-grid/

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.HandeleScroll)
  }
  HandeleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  } 
    render() {
    return (
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}> 
          <div className="HeaderGroup">
            <h1 className="firstPage">Oliver Parkinson</h1>
            <Link className="Portfolio" to="/page-2/">Portfolio</Link>
            <Link className="Contact" to="/page-2/">Contact</Link>
          </div>
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
