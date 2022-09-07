import {NextPage} from "next";
import React from "react";
import useMedia from "use-media";
import { MenuMobile } from "./menu/menuMobile";
import {MenuDesktop} from "./menu/menuDesktop";

const Menu: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})

    return isMobile ? <MenuMobile/>:<MenuDesktop/>
}
    export default Menu
