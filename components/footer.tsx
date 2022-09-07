import styles from "../styles/desktop/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import React from "react";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FontAwesomeIcon className={styles.footerIcon} icon={faInstagram}/>
            <FontAwesomeIcon className={styles.footerIcon} icon={faWhatsapp}/>
            <FontAwesomeIcon className={styles.footerIcon} icon={faEnvelope}/>
        </footer>
    )
}
