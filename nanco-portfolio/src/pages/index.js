import React from "react"
import Home from "../components/pages/home";

const HomeEN = () => (
    <Home
        greeting1={`Welcome to my page. I am a fullstack developer from Berlin.`}
        greeting2={`This is a brief introduction of mine, my projects and skills, fasten your seatbelt!`}
        aboutMeRoute='/about'
        aboutMeText='About Me'
        lang='en'
    />
);

export default HomeEN
