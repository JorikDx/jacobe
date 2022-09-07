import React, {useEffect, useState} from "react";
import {Pizza, TimeSlot} from "../../types";
import {Header, HeaderOption} from "../../components/header";
import styles from "../../styles/mobile/Reserve.module.css";
import Head from "next/head";
import {Button, Checkbox, Input, Progress, Tooltip} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBellConcierge, faCircleExclamation, faCircleInfo, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import {PizzaModal} from "../../components/pizzaModal";
import {Footer} from "../../components/footer";
import {HeaderMobile} from "../../components/mobile/header";
import {FooterMobile} from "../../components/mobile/footer";
import {PizzaModalMobile} from "../../components/mobile/pizzaModal";

export const ReserveMobile = () => {
    const [count, setCount] = useState(0);
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [pizzaString, setPizzaString] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
    const showModal = (visible: boolean) => {
        setIsModalVisible(visible);
    };

    const updatePizzas = (updatedPizzas: Pizza[]) => {
        setPizzas(updatedPizzas)
        updateTimeSlots(updatedPizzas)
        let tempPizzaString = ""
        updatedPizzas.forEach((pizza) => {
            if (updatedPizzas.indexOf(pizza) === updatedPizzas.length-1){
                tempPizzaString += pizza.nickname
                setPizzaString(tempPizzaString)
            }else{
                tempPizzaString += pizza.nickname + ", "
                setPizzaString(tempPizzaString)
            }
        })
    }



    const timeSlotExample = (): TimeSlot[] => {
        const today = new Date(Date.now())
        return(
            [{
                startTime: new Date(today.setHours(17, 0)),
                endTime: new Date(today.setHours(17, 15)),
                availablePizzas: 2
            },
                {
                    startTime: new Date(today.setHours(17, 15)),
                    endTime: new Date(today.setHours(17, 30)),
                    availablePizzas: 4
                },
                {
                    startTime: new Date(today.setHours(17, 30)),
                    endTime: new Date(today.setHours(17, 45)),
                    availablePizzas: 1
                },
                {
                    startTime: new Date(today.setHours(17, 45)),
                    endTime: new Date(today.setHours(18, 0)),
                    availablePizzas: 2
                },
                {
                    startTime: new Date(today.setHours(18, 0)),
                    endTime: new Date(today.setHours(18, 15)),
                    availablePizzas: 3
                },
                {
                    startTime: new Date(today.setHours(18, 15)),
                    endTime: new Date(today.setHours(18, 30)),
                    availablePizzas: 4
                },
                {
                    startTime: new Date(today.setHours(18, 30)),
                    endTime: new Date(today.setHours(18, 45)),
                    availablePizzas: 2
                },
                {
                    startTime: new Date(today.setHours(18, 45)),
                    endTime: new Date(today.setHours(19, 0)),
                    availablePizzas: 2
                }
            ])
    }

    const updateTimeSlots = (pizzas: Pizza[]) => {
        let tempTimeSlots: TimeSlot[] = []
        if (pizzas.length > 0) {
            timeSlotExample().forEach((timeSlot) => {
                if (timeSlot.availablePizzas >= pizzas.length) {
                    tempTimeSlots.push(timeSlot)
                }
            })
        }
        setTimeSlots(tempTimeSlots)
    }



    useEffect(() =>{
    },[pizzaString])
    return (
        <>
            <HeaderMobile option={HeaderOption.Reserve}/>
            <div className={styles.container}>
                <Head>
                    <title>Reserveren</title>
                    <meta name="Reserveren" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" href="/logo_orange.svg"/>
                </Head>
                <main className={styles.main}>
                    <div className={styles.title}>
                        <p>
                            We bakken op <span className={styles.titleHighlight}> 24 augustus</span>
                        </p>
                        <p>
                            Er zijn nog <span className={styles.titleHighlight}> 26 pizza&#39;s </span>
                        </p>
                        <Progress percent={50} showInfo={false} strokeWidth={10} strokeColor={"#FFB800"} trailColor={"#FFDC82"}/>
                    </div>
                    <div className={styles.formInputs}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Naam</label>
                            <Input className={styles.input}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Email</label>
                            <Input className={styles.input}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Telefoon
                                <Tooltip
                                    title="Laat uw telefoon nummer achter als u op eventuele vertraging wilt worden geattenteerd">
                                    <FontAwesomeIcon icon={faCircleInfo} color={"#FFB800"} size={"xs"}/>
                                </Tooltip>
                            </label>
                            <Input type={"text"} className={styles.input}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitle}>Pizza&#39;s</label>
                            <Button className={styles.pizzaButton} onClick={() => showModal(true)}>
                                <div className={styles.pizzaButtonContainer}>
                                    {pizzas.length > 0 ?
                                        <span className={styles.pizzaButtonText}>{`(${pizzas.length}) ${pizzaString}`}</span>
                                        :
                                        <span className={styles.pizzaButtonText}>
                                Klik hier om uw pizza&#39;s te kiezen</span>
                                    }
                                    <FontAwesomeIcon icon={faPizzaSlice} className={styles.pizzaButtonIcon}/>
                                </div>
                            </Button>
                        </div>
                        <PizzaModalMobile selectedPizzas={pizzas} pushPizzas={updatePizzas} showModal={showModal} isModalVisible={isModalVisible} />
                        <div className={styles.inputContainer}>
                            <label className={styles.inputTitleDisabled}>Tijdstip</label>
                            <div className={styles.dropdownGroup}>
                                <select disabled={timeSlots.length === 0} defaultValue={""} className={styles.dropdown} placeholder={"Kies"}>
                                    <option value="" disabled selected hidden>Kies</option>
                                    {timeSlots.map((timeSlot, index) => (
                                        <option key={index} value={timeSlot.startTime.getHours() +  ":" + (timeSlot.startTime.getMinutes()<10?"0":"") + timeSlot.startTime.getMinutes() + " - " + timeSlot.endTime.getHours() +  ":" + (timeSlot.endTime.getMinutes()<10?"0":"") + timeSlot.endTime.getMinutes()}>
                                            {timeSlot.startTime.getHours() +  ":" + (timeSlot.startTime.getMinutes()<10?"0":"") + timeSlot.startTime.getMinutes() + " - " + timeSlot.endTime.getHours() +  ":" + (timeSlot.endTime.getMinutes()<10?"0":"") + timeSlot.endTime.getMinutes()}
                                        </option>
                                    ))}

                                </select>
                                {pizzas.length === 0 ?
                                    <>
                                <FontAwesomeIcon icon={faCircleExclamation} color={"#FFB800"} size={"xl"}
                                                 style={{marginRight: ".1rem !important"}}/>
                                <span style={{marginLeft: ".2rem"}}>Kies eerst uw pizza &#39;s voor het tijdstip</span>
                                    </>:<></>}
                            </div>
                        </div>
                        <div className={"checkBoxWrapper"}>
                            <Checkbox className={styles.checkBox}>Houd me op de hoogte voor het volgende bak moment</Checkbox>
                        </div>
                    </div>
                    <Button className={styles.reserveButton}>
                        <div className={styles.reserveButtonContainer}>
                            <span className={styles.pizzaButtonText}>Reserveren</span>
                            <FontAwesomeIcon className={styles.pizzaButtonIcon} icon={faBellConcierge}/>
                        </div>
                    </Button>
                </main>
            </div>
            <FooterMobile/>
        </>
    )
}
export default ReserveMobile
