import type {NextPage} from 'next'
import {Select} from "antd";
import React from 'react';
import useMedia from "use-media";
import {ReserveMobile} from "./reserve/reserveMobile";
import {ReserveDesktop} from "./reserve/reserveDesktop";

const { Option } = Select;
const Reserve: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})
    return isMobile ? <ReserveMobile/> : <ReserveDesktop/>
}

export default Reserve
