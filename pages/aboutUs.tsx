import {NextPage} from "next";
import React from "react";
import {Carousel, Image} from "antd";
import styles from "/styles/desktop/AboutUs.module.css"
import {Header, HeaderOption} from "../components/header";
import {Footer} from "../components/footer";
import {AboutUsDesktop} from "./aboutUs/aboutUsDesktop";
import useMedia from "use-media";
import {AboutUsMobile} from "./aboutUs/aboutUsMobile";


const AboutUs: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})
    return isMobile ? <AboutUsMobile/> : <AboutUsDesktop/>
}
    export default AboutUs
