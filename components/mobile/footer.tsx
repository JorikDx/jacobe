import styles from "/styles/mobile/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {Button} from "antd";
import Link from "next/link";

interface FooterProps {
    isHome?: boolean
}

export const FooterMobile = (props: FooterProps) => {
    const {
        isHome
    } = props
    return isHome ? (
        <footer className={styles.footerHome}>
            <div className={styles.iconContainerHome}>
                <a href={"https://www.instagram.com/jacobe_pizza/"}><FontAwesomeIcon className={styles.footerIcon}
                                                                                     icon={faInstagram}/></a>
                <a href={"https://wa.me/31655025356"}><FontAwesomeIcon className={styles.footerIcon} icon={faWhatsapp}/></a>
                <a href={"mailto:info@jacobe.nl"}><FontAwesomeIcon className={styles.footerIcon} icon={faEnvelope}/></a>
            </div>
        </footer>
    ) : (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <a href={"https://www.instagram.com/jacobe_pizza/"}><FontAwesomeIcon className={styles.footerIcon}
                                                                                     icon={faInstagram}/></a>
                <a href={"https://wa.me/31655025356"}><FontAwesomeIcon className={styles.footerIcon} icon={faWhatsapp}/></a>
                <a href={"mailto:info@jacobe.nl"}><FontAwesomeIcon className={styles.footerIcon}
                                                                                  icon={faEnvelope}/></a>
            </div>
            <div className={styles.reserveContainer}>
                <Link href={"/reserve"}>
                    <Button className={styles.reserveButton}>Reserveren</Button>
                </Link>
            </div>
        </footer>
    )
}
