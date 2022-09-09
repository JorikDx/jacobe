import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styles from "/styles/mobile/PizzaSelector.module.css"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import {Button, Image, Select} from "antd";
import {Pizza} from "../../types";
import React, {useEffect, useState} from "react";

export type PizzaSelectorProps = {
    pizza: Pizza
    removePizza(pizza: Pizza): void
    updatePizza(oldPizza: Pizza, newPizza: Pizza): void
    index: number
}
export const PizzaSelectorMobile = (props: PizzaSelectorProps) => {
    const {
        pizza,
        removePizza,
        updatePizza,
        index
    } = props
    console.log("pizza input"+ index, pizza)

    const pizzaExamples: Pizza[] =
        [{
            id: "1",
            name: "Margherita",
            ingredients: "Tomatensaus, Mozarella, Basilicum",
            imageSource: "pizzaMargherita.png",
            price: 9.99,
            nickname: "Kaas",
            vegan: true
        },
            {
                id: "2",
                name: "Prociuto",
                ingredients: "Tomatensaus, Mozarella, Ham",
                imageSource: "pizza.png",
                price: 12.99,
                nickname: "Ham",
                vegan: false
            },
            {
                id: "3",
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
        console.log("pizza update" + index, pizza)
        setPizza(pizza)
    }, [pizza])

    return (
        <>
            {console.log("pizza" + index, updatedPizza)}
            {console.log("pizzaOld" + index, pizza)}
        <div className={styles.pizzaContainer}>
            <div className={"selectContainer"}>
                <Select value={updatedPizza !== null ? updatedPizza.name: ""} bordered={false} className={styles.select}
                        onChange={handleChange}>
                    <Option value="" disabled selected hidden><span className={styles.option}>Selecteer</span></Option>
                    <Option value="Margherita"><span className={styles.option}>Margherita</span></Option>
                    <Option value="Prociuto"><span className={styles.option}>Prociuto</span></Option>
                    <Option value="Salame"><span className={styles.option}>Salame</span></Option>
                </Select>
            </div>
            <Image src={updatedPizza !== null ? updatedPizza.imageSource : "pizzaUnknown.png"} width={"98px"} height={"98px"}
                   className={styles.image} preview={false}/>
            <FontAwesomeIcon icon={faCircleMinus} className={styles.removeButton} size={"xl"}
                             onClick={() => removePizza(updatedPizza)}/>
        </div>
        </>
    )
}
