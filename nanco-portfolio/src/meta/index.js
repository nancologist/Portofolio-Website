import React from "react";
import {Helmet} from "react-helmet";

const Meta = () => (
    <Helmet>
        <meta charSet="utf-8" />
        {/* Set primary color for the tab in Android Chrome Browser: */}
        <meta name="theme-color" content="#86c232" />
        {/* Set a high resolution favicon for Android Chrome: */}
        <link rel="icon" sizes="192x192" href="../../public/icons/icon-192x192.png"/>
        <title>MJF | Fullstack Engineer</title>
        {/*FONTS: Montserrat, Montserrat Alternates, Convergence, Zilla Slab, Rubik*/}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Convergence&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>

        {/* Font Icons */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
);

export default Meta;