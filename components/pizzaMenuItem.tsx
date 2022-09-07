import {Pizza} from "../types";
import styles from "/styles/desktop/PizzaMenuItem.module.css"
import {Image} from "antd";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export type PizzaMenuItemProps = {
    pizza: Pizza
}

export const PizzaMenuItem = (props: PizzaMenuItemProps) => {
    const {
        pizza
    } = props

    return (
        <div className={styles.container}>
            <Image src={pizza.imageSource || "pizza.png"} width={"250px"} height={"250px"}/>
            <span className={styles.title}>{pizza.name} {pizza.vegan ? <FontAwesomeIcon icon = {faLeaf} color={"#22bb88"}/>: <></>}</span>
            <span className={styles.ingredients}>{pizza.ingredients}</span>
            <div style={{paddingTop: "1rem"}}>
            <span className={styles.euro}>€</span><span className={styles.price}>{pizza.price}</span>
            </div>
        </div>

    )
}
