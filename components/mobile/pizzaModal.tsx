import { PizzaSelectorMobile} from "./pizzaSelector";
import {Alert, Button, Modal} from "antd";
import styles from "/styles/mobile/PizzaModal.module.css";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Pizza} from "../../types";

export type PizzaModalProps = {
    selectedPizzas: Pizza[]
    pushPizzas(pizzas: Pizza[]): void
    showModal(visible: boolean): void
    isModalVisible: boolean
}

export const PizzaModalMobile = (props : PizzaModalProps) => {
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
        console.log("pizzas", pizzas)
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
        <Modal title={""} closable={false} className={styles.modal} centered bodyStyle={{overflowY: 'inherit', minHeight: "calc(95vh - 100px)", background: "#FFFDF3"}} visible={isModalVisible} onOk={handleOk} onCancel={handleOk}  footer={<Footer/>} style={{padding: "0 !important"}}>
        <div className={styles.body}>
            <div className={styles.exit}>
                <FontAwesomeIcon icon={faAngleLeft} size={"4x"} onClick={handleOk}/>
            </div>
            <div className={styles.container}>
            <span className={styles.header}>{"Kies uw pizza's"}</span>
            {pizzas.map((pizza, index) => (
                <PizzaSelectorMobile key={index} pizza={pizza} removePizza={removePizza} updatePizza={updatePizza} index={index} last={index+1 == pizzas.length}/>
                )
            )}
                {pizzas.length <4 ?
                    <Button className={styles.addButton} onClick={() => addPizza(null)}>
                +
            </Button>
                    :<></>}
            </div>
        </div>
        </Modal>

    )
}
