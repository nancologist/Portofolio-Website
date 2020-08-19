import React from "react"
import Home from "../../components/pages/home";

const HomeDE = () => (
    <Home
        greeting1={`Willkommen zu meiner Seite.`}
        greeting2={`Das ist eine kurze Vorstellung von mir, meiner Projekte und Kompetenzen.`}
        // greeting2={`This is a brief introduction of mine, my projects and skills, fasten your seatbelt!`}
        aboutMeRoute='/ueber-mich'
        aboutMeText='Über mich'
        lang='de'
    />
);

export default HomeDE
