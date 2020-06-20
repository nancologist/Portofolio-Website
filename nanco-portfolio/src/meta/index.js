import React from "react";
import {Helmet} from "react-helmet";

const Meta = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>MJFX | Fullstack Developer</title>
        {/*FONTS: Montserrat, Montserrat Alternates, Convergence, Zilla Slab, Rubik*/}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Convergence&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
);

export default Meta;