import React from 'react'
import "./reviews.css"
const Reviews = () => {
  return (
    <div class="reviews" id="reviews">
    <div class="container">
        <div class="reviews__slider" id="reviewsSlider">
            <div>
                <div class="reviews__item">
                    <div class="reviews__photo">
                        <img class="reviews__img" src="img/reviews/1.jpg" alt=""/>
                    </div>
                    <div class="reviews__content">
                        <div class="reviews__text">Lipsum   sdfsdgsadgsdgsgsds gsdfsd  fsdfdf  sdgsgsd  sasdf  fggsd  gsddf </div>
                        <div class="reviews__autor">Susan Sims, Interaction Designer at XYZ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Reviews