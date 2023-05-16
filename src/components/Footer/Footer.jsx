import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    
<footer class="footer">
    <div class="container">
        <div class="footer__inner">
            <div class="footer__block">
                <h4 class="footer__title">Location</h4>
                <div class="footer__text">
                    <address class="footer__addres">
                        <div>3481 Melrose Place</div> 
                        <div>Beverly Hills, CA 90210</div> 
                    </address>
                </div>
            </div>

            <div class="footer__block">
                <h4 class="footer__title">Share with Love</h4>
                <div class="social socal--footer">
                    <a href="#" class="social__item" target="_blank">
                        <svg class="social__icon">
                        </svg>
                    </a>

                    <a href="#" class="social__item" target="_blank">
                        <svg class="social__icon">
                        </svg>
                    </a>

                    <a href="#" class="social__item" target="_blank">
                        <svg class="social__icon">
                        </svg>
                    </a>

                </div>
            </div>

            <div class="footer__block">
                <h4 class="footer__title">About ActiveBox</h4>
                <div class="footer__text">
                    <div class="footer__text">
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="copyright">
        <div class="container">
            <div class="copyright__text">
                <div>Copyright © 2015 ActiveBox. All Rights Reserved
                    </div>
                    <div>Made <span>by Kamal Chaneman</span></div>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer