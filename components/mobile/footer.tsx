import styles from "/styles/mobile/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {Button} from "antd";
import Link from "next/link";

export const FooterMobile = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.footerIcon} icon={faInstagram}/>
                <FontAwesomeIcon className={styles.footerIcon} icon={faWhatsapp}/>
                <FontAwesomeIcon className={styles.footerIcon} icon={faEnvelope}/>
            </div>
            <div className={styles.reserveContainer}>
                <Link href={"/reserve"}>
                <Button className={styles.reserveButton}>Reserveren</Button>
                </Link>
            </div>
        </footer>
    )
}
