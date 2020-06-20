import React, { Fragment } from "react";
import Meta from "../../meta";
import './index.css';
import AppNav from "../../components/navigation/navigation";

const MainLayout = ({ children }) => (
    <Fragment>
        <Meta/>
        <AppNav />
        <div>{children}</div>
    </Fragment>
);

export default MainLayout;