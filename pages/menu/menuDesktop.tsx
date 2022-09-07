import {Pizza} from "../../types";
import React, {useState} from "react";
import Head from "next/head";
import {Header, HeaderOption} from "../../components/header";
import styles from "/styles/desktop/Menu.module.css";
import {PizzaMenuItem} from "../../components/pizzaMenuItem";
import {Footer} from "../../components/footer";

export const MenuDesktop = () => {
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
                vegan: false
            },
            {
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
                vegan: false
            },
            {
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
