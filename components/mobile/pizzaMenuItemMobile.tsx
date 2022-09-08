import {Pizza} from "../../types";
import styles from "/styles/mobile/PizzaMenuItem.module.css"
import {Image} from "antd";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export type PizzaMenuItemProps = {
    pizza: Pizza
}

export const PizzaMenuItemMobile = (props: PizzaMenuItemProps) => {
    const {
        pizza
    } = props

    return (
        <div className={styles.container}>
            <div className={styles.description}>
            <span className={styles.title}>{pizza.name} {pizza.vegan ? <FontAwesomeIcon icon = {faLeaf} color={"#22bb88"}/>: <></>}</span>
            <span className={styles.ingredients}>{pizza.ingredients}</span>
                <div>
            <span className={styles.euro}>€</span><span className={styles.price}>{pizza.price}</span>
                </div>
            </div>
            <div>
                <Image src={pizza.imageSource || "pizza.png"} width={"150px"} preview={false} height={"150px"}/>
            </div>
        </div>

    )
}
