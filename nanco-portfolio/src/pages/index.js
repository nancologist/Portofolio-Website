import React from "react"

import './home.css';
import Home from "../components/pages/home";

const HomeEN = () => (
    <Home
        greeting1={`Hi, I'm Mori! Welcome to my page.`}
        greeting2={`This is a brief introduction of mine, my projects and skills, fasten your seatbelt!`}
        aboutMeRoute='/about'
        aboutMeText='About Me'
        lang='en'
    />
);

export default HomeEN
