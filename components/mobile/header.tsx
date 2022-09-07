import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styles from "/styles/mobile/Header.module.css"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {HeaderOption} from "../header";
import {Image, Modal} from "antd";
import Link from "next/link";
import {useState} from "react";

export type HeaderMobileProps = {
    option: HeaderOption
}

export const HeaderMobile = (props: HeaderMobileProps) => {
    const {
        option
    } = props
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        window.scrollTo(0, 0);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={option === HeaderOption.Home ? styles.menuLogo : styles.menu}>
                {/*<div className={styles.menuLeft}>*/}
                {/*    <Link href={"/navigation"}>*/}
                {/*    <FontAwesomeIcon icon={faBars} color={'#FFB800'} size={"3x"}/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*{option === HeaderOption.Home ? (*/}
                {/*    <>*/}
                {/*    <div className={styles.logo}>*/}
                {/*            <Image src={"/logo_full_orange.svg"} width={"180px"} height={"50px"}/>*/}
                {/*        </div>*/}
                {/*    <div className={styles.menuLogoRight}>*/}
                {/*        <span>Hoi</span>*/}
                {/*    </div>*/}
                {/*    </>*/}
                {/*    )*/}
                {/*    :*/}
                {/*    <div className={styles.menuRight}>*/}
                {/*        <Link href={"/"}>*/}
                {/*        <Image src={'/logo_orange_header.svg'} width={"36px"} height={'36px'}/>*/}
                {/*        </Link>*/}


                <div className={styles.menuLeft}>
                    <FontAwesomeIcon icon={faBars} color={'#FFB800'} size={"3x"} onClick={showModal}/>
                </div>
                {option === HeaderOption.Home ? (
                        <>
                            <div className={styles.logo}>
                                <Image src={"/logo_full_orange.svg"} width={"180px"} height={"50px"}/>
                            </div>
                            <div className={styles.menuLogoRight}>
                                <span>Hoi</span>
                            </div>
                        </>
                    )
                    :
                    <div className={styles.menuRight}>
                        <Link href={"/"}>
                            <Image src={'/logo_orange_header.svg'} width={"36px"} height={'36px'} preview={false}/>
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
                            <span style={option === HeaderOption.Menu ? {fontWeight: "bold"} : {}}>Menu</span>
                        </Link>
                        <Link href={"/aboutUs"}>
                            <span style={option === HeaderOption.AboutUs ? {fontWeight: "bold"} : {}}>Over ons</span>
                        </Link>
                        <Link href={"/menu"}>
                            <span style={option === HeaderOption.Catering ? {fontWeight: "bold"} : {}}>Catering</span>
                        </Link>
                        <Link href={"/contact"}>
                            <span style={option === HeaderOption.Contact ? {fontWeight: "bold"} : {}}>Contact</span>
                        </Link>
                        <Link href={"/reserve"}>
                            <span style={option === HeaderOption.Reserve ? {fontWeight: "bold"} : {}}>Reserveren</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </>
        // </div>
    )
}
