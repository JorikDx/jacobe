import styles from "../styles/desktop/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import React from "react";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href={"https://www.instagram.com/jacobe_pizza/"}><FontAwesomeIcon className={styles.footerIcon} icon={faInstagram}/></a>
            <a href={"https://wa.me/31655025356"}><FontAwesomeIcon className={styles.footerIcon}  icon={faWhatsapp}/></a>
            <a href={"mailto:info@jacobe.nl"}><FontAwesomeIcon className={styles.footerIcon}  icon={faEnvelope}/></a>
        </footer>
    )
}
