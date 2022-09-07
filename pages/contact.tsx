import {NextPage} from "next";
import React from "react";
import useMedia from "use-media";
import {ContactMobile} from "./contact/contactMobile";
import {ContactDesktop} from "./contact/contactDesktop";


const Contact: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})
return isMobile ? <ContactMobile/> : <ContactDesktop/>
}
export default Contact
