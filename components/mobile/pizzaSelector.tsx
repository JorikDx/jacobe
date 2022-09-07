import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styles from "/styles/mobile/PizzaSelector.module.css"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import {Button, Image, Select} from "antd";
import {Pizza} from "../../types";
import {useEffect, useState} from "react";

export type PizzaSelectorProps = {
    pizza: Pizza
    removePizza(index: number): void
    updatePizza(oldPizza: Pizza, newPizza: Pizza): void
    index : number
}
export const PizzaSelectorMobile = (props: PizzaSelectorProps) => {
    const {
        pizza,
        removePizza,
        updatePizza,
        index
    } = props

    const pizzaExamples: Pizza[] =
        [{
            name: "Margherita",
            ingredients: "Tomatensaus, Mozarella, Basilicum",
            imageSource: "pizzaMargherita.png",
            price: 9.99,
            nickname: "Kaas",
            vegan: true
        },
            {
                name: "Prociuto",
                ingredients: "Tomatensaus, Mozarella, Ham",
                imageSource: "pizza.png",
                price: 12.99,
                nickname: "Ham",
                vegan: false
            },
            {
                name: "Salame",
                ingredients: "Tomatensaus, Mozarella, Spinata Romana",
                imageSource: "pizzaSalame.png",
                price: 12.99,
                nickname: "Salami",
                vegan: true
            }]

    const [updatedPizza, setPizza] = useState(pizza)
    const {Option} = Select;
    const handleChange = (value: string) => {
        const oldPizza = pizza
        if (value === "Margherita") {
            const newPizza = pizzaExamples[0]
            if (oldPizza !== undefined) {
                updatePizza(oldPizza, newPizza)
                setPizza(newPizza)
            }
        } else if (value === "Prociuto") {
            const newPizza = pizzaExamples[1]
            if (oldPizza !== undefined) {
                updatePizza(oldPizza, newPizza)
                setPizza(newPizza)
            }
        } else {
            const newPizza = pizzaExamples[2]
            if (oldPizza !== undefined) {
                updatePizza(oldPizza, newPizza)
                setPizza(newPizza)
            }
        }

    };

    useEffect(() => {
        setPizza(pizza)
    }, [pizza])

    return (
        <div className={styles.pizzaContainer}>
            <div className={"selectContainer"}>
                <Select value={updatedPizza.name} bordered={false} className={styles.select}
                        onChange={handleChange}>
                    <Option value="Margherita"><span className={styles.option}>Margherita</span></Option>
                    <Option value="Prociuto"><span className={styles.option}>Prociuto</span></Option>
                    <Option value="Salame"><span className={styles.option}>Salame</span></Option>
                </Select>
            </div>
            <Image src={updatedPizza.imageSource || "pizza.png"} width={"98px"} height={"98px"}
                   className={styles.image} preview={false}/>
            <FontAwesomeIcon icon={faCircleMinus} className={styles.removeButton} size={"xl"}
                             onClick={() => removePizza(index)}/>
        </div>
    )
}
