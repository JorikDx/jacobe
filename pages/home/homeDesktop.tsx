import Head from "next/head";
import styles from "../../styles/desktop/Home.module.css";
import {Header, HeaderOption} from "../../components/header";
import Link from "next/link";
import {Button} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Footer} from "../../components/footer";
import React from "react";

export const HomeDesktop = () =>{
    return (
        <>
            <Head>
                <title>Jacobé</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/logo_orange.svg"/>
            </Head>
            <div className={styles.wrapper}>
                <Header option={HeaderOption.Home}/>
                <div className={styles.main}>
                    <div className={styles.titleContainer}>
        <span className={styles.title}>
          Verse pizza
        </span>
                        <span className={styles.subtitle}>
          Zo, uit de tuin
        </span>
                        <Link href={"/reserve"}>
                            <Button className={styles.reserveButton}>
                                Reserveren
                            </Button>
                        </Link>
                    </div>
                    {/*<Image src="/pizza.png" width="600px" height="600px" className={styles.pizza}/>*/}
                    <div className={styles.socials}>
                        <FontAwesomeIcon icon={"location-dot"}/>
                        <FontAwesomeIcon icon={"whatsapp"}/>
                        <FontAwesomeIcon icon={"instagram"}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default HomeDesktop
