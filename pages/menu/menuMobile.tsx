import Head from "next/head";
import React, {useState} from "react";
import styles from "/styles/mobile/Menu.module.css";
import {Pizza} from "../../types";
import {PizzaMenuItemMobile} from "../../components/mobile/pizzaMenuItemMobile";
import {HeaderMobile} from "../../components/mobile/header";
import {HeaderOption} from "../../components/header";
import {FooterMobile} from "../../components/mobile/footer";

export const MenuMobile = () => {
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
            <HeaderMobile option={HeaderOption.Menu}/>
            <div className={styles.wrapper}>
                <span className={styles.title}>Menu</span>
                <div className={styles.container}>
                    {pizzaMenu.map((pizza, index) => (
                        <PizzaMenuItemMobile key={index} pizza={pizza}/>
                    ))}
                </div>
            </div>
            <FooterMobile/>
        </>
    )
}
export default MenuMobile
