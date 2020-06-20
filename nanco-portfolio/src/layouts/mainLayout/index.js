import React, { Fragment } from "react";
import Meta from "../../meta";
import './index.css';

const MainLayout = ({ children }) => (
    <Fragment>
        <Meta/>
        <div>{children}</div>
    </Fragment>
);

export default MainLayout;