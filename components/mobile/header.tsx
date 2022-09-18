import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styles from "/styles/mobile/Header.module.css"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {HeaderOption} from "../header";
import {Image, Modal} from "antd";
import Link from "next/link";
import {useEffect, useState} from "react";

export type HeaderMobileProps = {
    option: HeaderOption
}

export const HeaderMobile = (props: HeaderMobileProps) => {
    const {
        option
    } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shadow, setShadow] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShadow(window.pageYOffset > 20)
            );
        }
    }, []);

    return (
        <>
            <div className={option === HeaderOption.Home ? styles.menuLogo : shadow ? styles.menuShadow : styles.menu}>
                <div className={styles.menuLeft}>
                    <FontAwesomeIcon icon={faBars} color={'#FFB800'} size={"3x"} onClick={showModal}/>
                </div>
                {option === HeaderOption.Home ? (
                        <>
                            <div className={styles.logo}>
                                <Image src={"/logo_full_orange.svg"} preview={false} width={"180px"} height={"50px"}/>
                            </div>
                            <div className={styles.menuLogoRight}>
                                <span>Hoi</span>
                            </div>
                        </>
                    )
                    :
                    <div className={styles.menuRight}>
                        <Link href={"/"}>
                            <Image src={'/logo_orange.svg'} width={"36px"} height={'36px'} preview={false}/>
                        </Link>
                    </div>}
            </div>
            <Modal closable={false} centered bodyStyle={{overflowY: 'inherit', maxHeight: "95vh"}}
                   className={styles.modal}
                   width={"100%"} title="" footer={<></>} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={styles.body}>
                    <div className={styles.exit}>
                        <FontAwesomeIcon icon={faXmark} size={"4x"} onClick={() => handleCancel()}/>
                    </div>
                    <div className={styles.menuContainer}>
                        <Link href={"/menu"}>
                            <span style={option === HeaderOption.Menu ? {fontWeight: "500", background: "#FFB800", borderRadius: "4px"} : {}}>Menu</span>
                        </Link>
                        <Link href={"/aboutUs"}>
                            <span style={option === HeaderOption.AboutUs ? {fontWeight: "500", background: "#FFB800", borderRadius: "4px"} : {}}>Over ons</span>
                        </Link>
                        <Link href={"/menu"}>
                            <span style={option === HeaderOption.Catering ? {fontWeight: "500", background: "#FFB800", borderRadius: "4px"} : {}}>Catering</span>
                        </Link>
                        <Link href={"/contact"}>
                            <span style={option === HeaderOption.Contact ? {fontWeight: "500", background: "#FFB800", borderRadius: "4px"} : {}}>Contact</span>
                        </Link>
                        <Link href={"/reserve"}>
                            <span style={option === HeaderOption.Reserve ? {fontWeight: "500", background: "#FFB800", borderRadius: "4px"} : {}}>Reserveren</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
        // </div>
    )
}
