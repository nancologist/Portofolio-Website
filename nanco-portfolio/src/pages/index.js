import React from "react"
import Home from "../components/pages/home";

const HomeEN = () => (
    <Home
        name={'Morteza Jalilifar'}
        greeting1={`Welcome to my page.`}
        greeting2={`This is a brief introduction of mine, my projects and skills, fasten your seatbelt!`}
        aboutMeRoute='/about'
        aboutMeText='About Me'
        lang='en'
    />
);

export default HomeEN
