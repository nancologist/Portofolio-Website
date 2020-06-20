import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from './index.module.css';
import MainLayout from "../layouts/mainLayout";
import AppNav from "../components/navigation/navigation";

const Home = () => (
    <MainLayout>
        <AppNav isHome/>
        <div className={styles.container}>
            <h1>Morteza Jalilifar</h1>
            <p>
                I'm a fullstack developer from Berlin, Germany. Welcome to my page.
            </p>
            <Link to="/courses" className={styles.btn}>Zu Kursen</Link>
        </div>
        <div className={styles.cover}>
        </div>
    </MainLayout>
);

export default Home
