import React, { Fragment } from "react"
import { Link } from "gatsby"

import styles from './index.module.css';
import MainLayout from "../layouts/mainLayout";
import AppNav from "../components/navigation/navigation";

const Home = () => (
    <MainLayout>
        <div className={styles.cover}>
            <div className={styles.coverOverlay}>
                <AppNav isHome/>
                <div className={styles.container}>
                    <h1>Kurse der Berliner Volkshochschulen</h1>
                    <p>
                        In unserem Portal kannst du durch mehr als 1500 Kursangebote Berliner Volkshochschulen
                        deinen Kursen finden, dich anmelden und die Kursgebühr ganz einfach überweisen. Wenn du
                        Fragen hast, kannst du uns rund um die Uhr schreiben!
                    </p>
                    <Link to="/courses" className={styles.btn}>Zu Kursen</Link>
                </div>
            </div>
        </div>
    </MainLayout>
);

export default Home
