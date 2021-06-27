import React from 'react'
import {Link} from 'react-router-dom';


function CardItem({location, info,destination,label}) {
    return (
        <>
        <li
        className ="cards__item">
        <Link to= {destination} className = "cards__item__link">
            <figure className = "cards__item__pic-wrap" data-category = {label}>
                <img src = {location} className = "cards__item__img" alt =""/>
            </figure>

            <div className = "cards__item__info">
                <h5 className = "cards__item__text">{info}</h5>
            </div>
        </Link>
        </li> 
        </>
    )
}

export default CardItem
