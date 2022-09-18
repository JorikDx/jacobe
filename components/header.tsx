import styles from "/styles/desktop/Header.module.css"
import {Button, Image} from "antd";
import Link from "next/link";
import Logo from "./logo";
import {useEffect, useState} from "react";


export enum HeaderOption {
    Home= "home", Menu = "Menu", AboutUs = "Over ons", Catering = "Catering", Contact = "Contact", Reserve = "Reserve"
}

export type HeaderProps = {
    option: HeaderOption
}

export const Header = (props: HeaderProps) => {
    const [shadow, setShadow] = useState(false);

    const {
        option
    } = props

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setShadow(window.pageYOffset > 20)
            );
        }
    }, []);

    return (
        <div className={shadow ? styles.containerShadow : styles.container}>
            <div className={styles.logoContainer}>
                <Link href={"/"}>
                    <Image className={styles.logo} src={"/logo_full_orange.svg"} height={"75px"} width={"250px"}
                           preview={false}/>
                </Link>
            </div>
            <div className={styles.menu}>
                {option == HeaderOption.Menu ?
                    <span className={styles.menuItemSelected}>Menu</span>
                    :
                    <Link href={"/menu"}>
                        <span className={styles.menuItem}>Menu</span>
                    </Link>
                }
                {option == HeaderOption.AboutUs ?
                    <span className={styles.menuItemSelected}>Over ons</span>
                    :
                    <Link href={"/aboutUs"}>
                        <span className={styles.menuItem}>Over ons</span>
                    </Link>
                }
                {option == HeaderOption.Catering ?
                    <span className={styles.menuItemSelected}>Catering</span>
                    :
                    <Link href={"/menu"}>
                        <span className={styles.menuItem}>Catering</span>
                    </Link>
                }
                {option == HeaderOption.Contact ?
                    <span className={styles.menuItemSelected}>Contact</span>
                    :
                    <Link href={"/contact"}>
                        <span className={styles.menuItem}>Contact</span>
                    </Link>
                }
            </div>
            <div className={styles.reserveContainer}>
                {option == HeaderOption.Reserve ?
                    <Button className={styles.reserveButtonSelected} disabled>Reserveren</Button>
                    :
                    <Link href={"/reserve"}>
                    <Button className={styles.reserveButton}>Reserveren</Button>
                    </Link>
                }
            </div>
        </div>
    )
}
