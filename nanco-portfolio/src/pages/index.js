import React, { Fragment } from "react"

import styles from './index.module.css';
import MainLayout from "../layouts/index";

const Home = () => (
    <Fragment>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Morteza Jalilifar</h1>
                <p>
                    Hi, I'm Mori! Welcome to my page.
                </p>
                <p>
                    This is a brief introduction of mine, my projects and skills. Let's get started!
                </p>
            </div>
            <div className={styles.cover}>
        </div>
        </div>
    </Fragment>
);

export default Home
