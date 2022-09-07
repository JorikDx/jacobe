import {PizzaSelector} from "./pizzaSelector";
import {Pizza} from "../types";
import {Alert, Button, Modal} from "antd";
import styles from "/styles/desktop/PizzaModal.module.css";
import {useEffect, useState} from "react";

export type PizzaModalProps = {
    selectedPizzas: Pizza[]
    pushPizzas(pizzas: Pizza[]): void
    showModal(visible: boolean): void
    isModalVisible: boolean
}

export const PizzaModal = (props : PizzaModalProps) => {
    const {
        selectedPizzas,
        showModal,
        isModalVisible,
        pushPizzas
    } = props

    const [pizzas, setPizzas] = useState<Pizza[]>(selectedPizzas)
    const [amount, setAmount] = useState(pizzas.length)
    const handleOk = () => {
        setPizzas(pizzas)
        pushPizzas(pizzas)
        showModal(false);
    };

    const updatePizza = (oldPizza: Pizza, newPizza: Pizza) => {
        let tempPizzas = pizzas
        tempPizzas[pizzas.indexOf(oldPizza)] = newPizza
        setPizzas(tempPizzas)

    }



    const removePizza = (pizza: Pizza) => {
        let tempPizzas = pizzas
        tempPizzas.splice(tempPizzas.indexOf((pizza)), 1)
        setPizzas(tempPizzas)
        setAmount(pizzas.length)
    }

    const addPizza = (pizza: Pizza) => {
            pizzas.push(pizza)
            setPizzas(pizzas)
        setAmount(pizzas.length)
    }

    const Footer = () => {
        return(
            <div className={styles.footer}>
                <span> {amount + " Pizza's"}</span>
                <Button onClick={handleOk} className={styles.confirmButton}>Bevestigen</Button>
            </div>
        )
    }

    return(
        <Modal title={<span className={styles.header}>{"Kies uw pizza's"}</span>} centered className={styles.modal} visible={isModalVisible} onOk={handleOk} onCancel={handleOk} width={"1000px"} bodyStyle={{background: "#FFFDF3"}} footer={<Footer/>} style={{padding: "0 !important"}}>
        <div className={styles.container}>
            {pizzas.map((pizza, index) => (
               <PizzaSelector key={index} pizza={pizza} removePizza={removePizza} updatePizza={updatePizza}/>
            ))}
            {pizzas.length <4 ?
            <Button className={styles.addButton} onClick={() => addPizza({name: "Margherita", ingredients: "Tomatensaus, Mozarella, Basilicum", imageSource: "pizzaMargherita.png", price: 9.99, nickname: "Kaas", vegan: true})}>
                +
            </Button>
            :<></>}
        </div>
        </Modal>

    )
}
