import React from 'react'
import "./team.css"

const Team = () => {
  return (
    <div class="team" id="team">
    <div class="container">
        <div class="team__inner">
           


            <div class="team__item">
                <img  class="team__photo" src="img/team/4.jpg" alt=""/>
                
                <div class="team__name">Beverly Little</div>
                <div class="team__prof">Data Scientist</div>
                <div class="team__text"><p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.</p></div>
                <div class="social">
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

        </div>
    </div>
</div>

  )
}

export default Team