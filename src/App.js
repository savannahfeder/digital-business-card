import React from "react"
import Info from "./Info.js"
import About from "./About.js"
import Footer from "./Footer.js"
import Interests from "./Interests.js"

export default function App() {
    return (
        <div className="app">
            <Info />
            <div class="lower-half">
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}

