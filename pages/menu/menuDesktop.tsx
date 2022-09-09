import {Pizza} from "../../types";
import React, {useState} from "react";
import Head from "next/head";
import {Header, HeaderOption} from "../../components/header";
import styles from "/styles/desktop/Menu.module.css";
import {PizzaMenuItem} from "../../components/pizzaMenuItem";
import {Footer} from "../../components/footer";
import {MenuProps} from "./menuMobile";

export const MenuDesktop = (props: MenuProps) => {
    const {
        pizzas
    } = props
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
                vegan: false
            },
            {
                id: "4",
                name: "Margherita",
                ingredients: "Tomatensaus, Mozarella, Basilicum",
                imageSource: "pizzaMargherita.png",
                price: 9.99,
                nickname: "Kaas",
                vegan: true
            },
            {
                id: "5",
                name: "Prociuto",
                ingredients: "Tomatensaus, Mozarella, Ham",
                imageSource: "pizza.png",
                price: 12.99,
                nickname: "Ham",
                vegan: false
            },
            {
                id: "6",
                name: "Salame",
                ingredients: "Tomatensaus, Mozarella, Spinata Romana",
                imageSource: "pizzaSalame.png",
                price: 12.99,
                nickname: "Salami",
                vegan: false
            },
            {
                id: "7",
                name: "Margherita",
                ingredients: "Tomatensaus, Mozarella, Basilicum",
                imageSource: "pizzaMargherita.png",
                price: 9.99,
                nickname: "Kaas",
                vegan: true
            },
            {
                id: "8",
                name: "Prociuto",
                ingredients: "Tomatensaus, Mozarella, Ham",
                imageSource: "pizza.png",
                price: 12.99,
                nickname: "Ham",
                vegan: false
            },
            {
                id: "9",
                name: "Salame",
                ingredients: "Tomatensaus, Mozarella, Spinata Romana",
                imageSource: "pizzaSalame.png",
                price: 12.99,
                nickname: "Salami",
                vegan: false
            }]

    const [pizzaMenu, setPizzaMenu] = useState<Pizza[]>(pizzaExamples)
    const updatePizzaMenu = (pizzas: Pizza[]) => {
        setPizzaMenu(pizzas)
    }
    return (
        <>
            <Head>
                <title>Menu</title>
                <meta name="Menu" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/logo_orange.svg"/>
            </Head>
            <Header option={HeaderOption.Menu}/>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {pizzaMenu.map((pizza, index) => (
                        <PizzaMenuItem key={index} pizza={pizza}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default MenuDesktop
