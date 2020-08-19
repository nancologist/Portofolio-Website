import React, { Fragment } from "react";

import Transition from "../components/transition/transition";
import Meta from "../meta";
import './main.css';
import Navigation from "../components/navigation/navigation";

const MainLayout = ({ children, location }) => {
    const homeRegex = /\/$|\/de$|\/de\/$/;
    return (
        <Fragment>
            <Meta/>
            <Navigation
                isHome={location.pathname.match(homeRegex)}
                isGerman={location.pathname.includes('/de')}
            />
            <Transition location={location}>
                {children}
            </Transition>
        </Fragment>
    );
};

export default MainLayout;