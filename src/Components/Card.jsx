import React from 'react'
import "./card.css"

const Card = () => {
   return (
      <div class="card">
         <h2 class="card__title">Having fun with cards</h2>
         <img class="card__img" src="https://images2.imgbox.com/7a/9d/5YBMa1IA_o.jpg" alt="" />
         <p class="card__text">OK me too, I don't like this one but just to play around</p>
         <a class="card__btn" href="">buy me</a>
      </div>
   )
}

export default Card