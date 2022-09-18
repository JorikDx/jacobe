import styles from "/styles/mobile/Contact.module.css";
import {Header, HeaderOption} from "../../components/header";
import {Button, Input} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {Footer} from "../../components/footer";
import React from "react";
import Head from "next/head";
import {HeaderMobile} from "../../components/mobile/header";
import {FooterMobile} from "../../components/mobile/footer";
const { TextArea } = Input;

export const ContactMobile = () => {
    return(
        <>
            <Head>
                <title>Contact</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/logo_orange.svg"/>
            </Head>
            <div className={styles.wrapper}>
                <HeaderMobile option={HeaderOption.Contact}/>
                <div className={styles.body}>
                    <div className={styles.contactForm}>
            <span className={styles.contactTitle}>
                Stel ons uw vraag
            </span>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Email</label>
                            <Input className={styles.input}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Onderwerp</label>
                            <Input className={styles.input}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Vraag</label>
                            <TextArea rows={4} className={styles.textArea}/>
                        </div>
                        <Button className={styles.sendButton}>
                            {"Versturen"}
                            <FontAwesomeIcon className={styles.sendIcon} icon={faPaperPlane}/>

                        </Button>
                    </div>
                    <div className={styles.contactForm}>
                        <span className={styles.contactTitle}>
                Info
            </span>
                        <div className={styles.infoForm}>
                            <a style={{color: "#000000d9"}} href={"https://wa.me/31655025356"}>
                            <div className={styles.infoContainer}>
                                <FontAwesomeIcon icon={faWhatsapp} size={"2x"} className={styles.infoIcon}/>
                                <span>06-55025356</span>
                            </div>
                            </a>
                            <a style={{color: "#000000d9"}} href={"https://www.instagram.com/jacobe_pizza/"}>
                            <div className={styles.infoContainer}>
                                <FontAwesomeIcon icon={faInstagram} size={"2x"} className={styles.infoIcon}/>
                                <span>@jacobe_pizza</span>
                            </div>
                            </a>
                            <a style={{color: "#000000d9"}} href={"mailto:info@jacobe.com"}>
                            <div className={styles.infoContainer}>
                                <FontAwesomeIcon icon={faEnvelope} size={"2x"} className={styles.infoIcon}/>
                                <span>jacobee@gmail.com</span>
                            </div>
                        </a>
                        <div className={styles.infoContainer}>
                                <FontAwesomeIcon icon={faLocationDot} size={"2x"} color={"#FFB800"} style={{paddingLeft: ".3rem", marginRight : "1.3rem"}}/>
                                <span>Zie reservering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMobile/>
        </>
    )
}
export default ContactMobile
