import type {NextPage} from 'next'
import useMedia from "use-media";
import React from "react";
import {HomeMobile} from "./home/homeMobile";
import {HomeDesktop} from "./home/homeDesktop";

const Home: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})
    return isMobile ? <HomeMobile/> : <HomeDesktop/>
}

export default Home
