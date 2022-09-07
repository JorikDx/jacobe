import {Header, HeaderOption} from "../../components/header";
import styles from "/styles/desktop/AboutUs.module.css";
import {Carousel, Image} from "antd";
import {Footer} from "../../components/footer";
import React from "react";
import Head from "next/head";

export const AboutUsDesktop = () =>{
    return (
        <>
            <Head>
                <title>Over ons</title>
                <meta name="Over ons" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/logo_orange.svg"/>
            </Head>
            <Header option={HeaderOption.AboutUs}/>
            <div className={styles.body}>
                <Carousel className={styles.carousel} autoplay arrows effect={"fade"} adaptiveHeight={false}>
                    <div>
                        <Image src={"/carousel/aboutUs1.jpeg"} height={"50vh"} width={"50vw"} className={styles.carouselImage} preview={false}/>
                    </div>
                    <div>
                        <Image src={"/carousel/aboutUs2.jpeg"} height={"50vh"} width={"50vw"} className={styles.carouselImage} preview={false}/>
                    </div>
                    <div>
                        <Image src={"/carousel/aboutUs3.jpeg"} height={"50vh"} width={"50vw"} className={styles.carouselImage} preview={false}/>
                    </div>
                    <div>
                        <Image src={"/carousel/aboutUs4.jpeg"} height={"50vh"} width={"50vw"} className={styles.carouselImage} preview={false}/>
                    </div>
                </Carousel>
                <span className={styles.title}>Passie voor pizza</span>
                <p className={styles.description}>
                    {"Jacobé bestaat uit een groep vrienden die allemaal gefascineerd zijn door de Italiaanse keuken. " +
                    "Wij zijn alle drie op een andere wijze in aanraking gekomen met pizza bakken." +
                    "Onze hoofd chef bakt al 6 jaar pizza’s op tradionele wijze en onze oven man heeft dat laaste jaren ook de passie gevonden voor het vak."}

                </p>
                <p className={styles.description}>
                    {"Samen met onze gastheer verzorgen wij u een sfeer volle en traditie getrouwde avond maaltijd. " +
                    "Jacobe is begonnen in een achtertuin van een van zijn gastheren. Hier bakken wij voor een gereserveerde groep mensen die per avond uitgenodigd worden."}
                </p>
                <p className={styles.description}>
                    {"Het doel van de avond kan per persoon verschillen " +
                    "Wil je snel je pizza ophalen en hem ergens anders op eten? " +
                    "Geen probleem. Maar bij Jacobé kan je aan de gezammelijke tafel zitten om een avond maal te delen met vreemdelingen, " +
                    "iets wat altijd voor een goed gesprek zorgt"}
                </p>
            </div>
            <Footer/>
        </>
    )
}
export default AboutUsDesktop
