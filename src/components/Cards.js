import React from 'react';
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out epic destination</h1>
            <div className="cards__container">

                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                            location="/images/img-2.jpg"
                            info="Explore the hidden treasure of this location"
                            label="Edon happen"
                            destination="/services" />

                        <CardItem
                            location="/images/img-3.jpg"
                            info="Explore the hidden treasure of this location"
                            label="Edon happen"
                            destination="/services" />
                    </ul>


                    <ul className="cards__item spacebit">
                        <CardItem
                            location="/images/img-4.jpg"
                            info="Explore the hidden treasure of this location"
                            label="Edon happen"
                            destination="/services" />

                        <CardItem
                            location="/images/img-5.jpg"
                            info="Explore the hidden treasure of this location"
                            label="Edon happen"
                            destination="/services" />

                        <CardItem
                            location="/images/img-6.jpg"
                            info="Explore the hidden treasure of this location"
                            label="Edon happen"
                            destination="/services" />
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default Cards



