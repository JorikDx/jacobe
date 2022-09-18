import Head from "next/head";
import React from "react";
import {HeaderMobile} from "../../components/mobile/header";
import {HeaderOption} from "../../components/header";
import styles from "/styles/mobile/Home.module.css"
import {FooterMobile} from "../../components/mobile/footer";
import {Button} from "antd";
import Link from "next/link";

export const HomeMobile = () => {
    return (
        <>
            <Head>
                <title>Jacobé</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/logo_orange.svg"/>
            </Head>
            <div className={styles.wrapper}>
                <HeaderMobile option={HeaderOption.Home}/>
                <div className={styles.main}>
                    <div className={styles.contentContainer}>

                        <p className={styles.title}>
                            Verse pizza
                        </p>
                        <p className={styles.subtitle}>
                            Zo, uit de tuin
                        </p>
                        <Link href={"/reserve"}>
                            <Button className={styles.reserveButton}>
                                Reserveren
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <FooterMobile isHome={true}/>
        </>
    )
}
export default HomeMobile
