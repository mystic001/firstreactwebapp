import React from 'react';
import "./Footer.css"
import {Button} from './Button.js'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className = "footer-container">
            <section className = "footer--subscription">

                <p className = "footer-subscription-heading">
                    Join the adventure news letter to receive our best deals update
                </p>
                <p className = "footer-subscription-text">
                    You can unsubscribe anytime you want
                </p>

                <div className = "input-areas">
                    <form>
                        <input/>
                        <Button
                        >SUBSCRIBE</Button>
                    </form>
                </div>
            </section>

            <div className = "footer-links">

                <div className = "footer-links-wrapper">

                <div className = "footer-links-items">
                    <h2>About Us</h2>
                    <Link to="/">How it works</Link>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">How it works</Link>
                    <Link to="/">Testimonials</Link>
                </div>
                </div>

               
            </div>

        </div>
    )
}

export default Footer
