import {NextPage} from "next";
import React, {useState} from "react";
import useMedia from "use-media";
import { MenuMobile } from "./menu/menuMobile";
import {MenuDesktop} from "./menu/menuDesktop";
import {getDatabase, ref, onValue, get, child} from "firebase/database";
import {Pizza} from "../types";

const Menu: NextPage = () => {
    const isMobile = useMedia({maxWidth: '1024px'})
    // const [pizzas, setPizzas] = useState<Pizza[]>([])
    const db = getDatabase();
    const dbRef = ref(getDatabase());

    const pizzas: Pizza[] =
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

    // const pizzaData = ref(db, '/Pizzas');
    // get(child(dbRef, `/Pizzas`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //         setPizzas(snapshot.val)
    //         console.log(pizzas)
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });

    // onValue(pizzaData, (snapshot) => {
    //     const data = snapshot.val();
    //     setPizzas(data)
    //     console.log(data)
    //     console.log(pizzas)
    // });
    return isMobile ? <MenuMobile pizzas = {pizzas}/>:<MenuDesktop pizzas = {pizzas}/>
}
    export default Menu
