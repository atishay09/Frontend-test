import React from 'react'
import "./card.css"

const Card = ({data}) => {
   return (
      <div className="card">
         <h2 className="card__title">{data?.title}</h2>
         <img className="card__img" src={data?.images[0]} alt="" />
         <p className="card__text">{data?.description}</p>
         <div className="d-flex justify-content-between">
            <p>Price : {data?.price}</p>
            <p>Discount : {data?.discountPercentage}%</p>
         </div>
         <a className="card__btn" href="">buy me</a>
      </div>
   )
}

export default Card