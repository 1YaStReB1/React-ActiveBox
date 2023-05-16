import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <nav class="nav" id="nav">
                    <a href="#" class="nav__link" data-scroll="#features">Features</a>
                    <a href="#" class="nav__link" data-scroll="#works">Works</a>
                    <a href="#" class="nav__link" data-scroll="#team">Our Team</a>
                    <a href="#" class="nav__link" data-scroll="#reviews">Testimonials</a>
                    <a href="#" class="nav__link" data-scroll="#download">Download</a>
                </nav>
  )
}

export default Nav