import React, { useEffect, useState } from "react"
import Home from "../components/pages/home";

const HomeEN = () => {
    const [isIE, setIsIE] = useState(false);
    useEffect(() => {
        const ua = window.navigator.userAgent;
        setIsIE(/MSIE|Trident/.test(ua));
    }, []);

    if (isIE) {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Error: IE internet browsers are not supported!</h1>
                <p>This is a modern webpage using modern technologies. To check it out please come back with a modern browser like Firefox, Chrome or Microsoft Edge.</p>
                <p>Thank you! :)</p>
                <p>Morteza Jalilifar</p>
            </div>
        );
    }

    return (
        <Home
            greeting1={`Welcome to my page. I am a fullstack developer from Berlin.`}
            greeting2={`This is a brief introduction of mine, my projects and skills, fasten your seatbelt!`}
            aboutMeRoute='/about'
            aboutMeText='About Me'
            lang='en'
        />
    );
}

export default HomeEN
