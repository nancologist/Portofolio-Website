import React, { Fragment } from "react";

import Transition from "../components/transition/transition";
import Meta from "../meta";
import './main.css';
import AppNav from "../components/navigation/navigation";

const MainLayout = ({ children, location }) => {
    // if (location.pathname === "/") {
    //     return (
    //         <Fragment>
    //             <Meta/>
    //             <Transition location={location}>
    //                 {children}
    //             </Transition>
    //         </Fragment>
    //     );
    // }

    return (
        <Fragment>
            <Meta/>
            {
                location.pathname !== '/' ? <AppNav/> : null
            }
            <Transition location={location}>
                {children}
            </Transition>
        </Fragment>
    );
};

export default MainLayout;