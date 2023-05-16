import React from 'react'
import Logo from "../../img/activebox-logo.png"
import Burger from '../Burger/Burger'
import "./header.css"
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header class="header" id="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <img src={Logo} alt="Logo"/>
                </div>

                <Nav/>

                <Burger/>

            </div>
        </div>
    </header>
  )
}

export default Header