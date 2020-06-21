import React, { Fragment } from "react";

import Transition from "../components/transition/transition";
import Meta from "../meta";
import './index.css';
import AppNav from "../components/navigation/navigation";

const MainLayout = ({ children, location }) => {
    return (
        <Fragment>
            <Meta/>
            <AppNav />
            <Transition location={location}>
                {children}
            </Transition>
        </Fragment>
    );
};

export default MainLayout;