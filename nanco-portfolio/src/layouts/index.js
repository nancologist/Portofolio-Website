import React, { Fragment } from "react";

import Transition from "../components/transition/transition";
import Meta from "../meta";
import './main.css';
import AppNav from "../components/navigation/navigation";

const MainLayout = ({ children, location }) => {
    return (
        <Fragment>
            <Meta/>
            <AppNav isHome={location.pathname === '/'}/>
            <Transition location={location}>
                {children}
            </Transition>
        </Fragment>
    );
};

export default MainLayout;