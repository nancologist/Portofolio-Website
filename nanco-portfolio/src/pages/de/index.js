import React from "react"
import Home from "../../components/pages/home";

const HomeDE = () => (
    <Home
        greeting1={`Willkommen zu meiner Seite.`}
        greeting2={`Das ist eine kurze Einführung in meine professionelle Karriere, Projekte und Kompetenzen.`}
        aboutMeRoute='/de/ueber-mich'
        aboutMeText='Über mich'
        lang='de'
    />
);

export default HomeDE
