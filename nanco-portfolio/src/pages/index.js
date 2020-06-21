import React, { Fragment } from "react"

import styles from './index.module.css';
import MainLayout from "../layouts/index";

const Home = () => (
    <Fragment>
        <div className={styles.container}>
            <h1>Morteza Jalilifar</h1>
            <p>
                I'm a fullstack developer from Berlin, Germany. Welcome to my page.
            </p>
            <div className={styles.cover}>
        </div>
        </div>
    </Fragment>
);

export default Home
