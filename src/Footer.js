import React from "react"
import githubLogo from "./images/GitHub Icon.svg"
import facebookLogo from "./images/Facebook Icon.svg"
import instagramLogo from "./images/Instagram Icon.svg"
import twitterLogo from "./images/Twitter Icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-elements">
                <img className="footer-icon" src={twitterLogo} alt="Twitter logo"/>
                <img className="footer-icon" src={facebookLogo} alt="Facebook logo"/>
                <img className="footer-icon" src={instagramLogo} alt="Instagram logo"/>
                <img className="footer-icon" src={githubLogo} alt="GitHub logo"/>
            </div>
        </div>
    )
}