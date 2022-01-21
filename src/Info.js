import React from "react"
import headshot from "./images/headshot.jpg"
//to fix buttons: (1) import button icons, (2) put them in their respective place in a (after making them inline)

export default function Info() {
    return (
        <div className="info">
            <img className="headshot" src={headshot} alt="Savannah Feder headshot" />
            <div className="info-and-buttons">
                <h1>Savannah Feder</h1>
                <p className="role-text">Software Developer</p>
                <p className="regular-text website-link" >www.savannahfeder.com</p>
                <a className="button white-button" href="sfeder0@gmail.com" rel="noreferrer" target="_blank" >Email</a>
                <a className="button blue-button" href="https://www.linkedin.com/in/savannahfeder/" rel="noreferrer" target="_blank" >LinkedIn</a>
            </div>
        </div>
    )
}