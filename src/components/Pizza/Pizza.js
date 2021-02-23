import React, { useState, useEffect } from "react"

import Arrows from "../../assets/arrows.svg"
import Pouder from "../../assets/pouder.svg"
import PizzaImg from "../../assets/pizza.png"

import AnimatedNumber from "animated-number-react";

import styles from "./pizza.module.scss"

const Pizza = () => {
    const sizes = ['Small', 'Medium', 'Xxl'];
    const [active, setActive] = useState('Medium');
    const [price, setPrice] = useState('10.5');
    const priceFormated = Number(price).toFixed(2)
    useEffect(() => {
        if (active == 'Small') {
            setPrice('7')
        } else if (active == 'Xxl') {
            setPrice('14')
        } else {
            setPrice('10.5')
        }
    }, [active])
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.fieldset}>
                    <fieldset>
                        <legend align="center">size</legend>
                        {sizes.map((size) => (
                            <span key={size.index}
                                onClick={() => setActive(size)}
                                className={active == size ? styles.active : styles.size}
                            >
                                {size}
                            </span>
                        ))}
                    </fieldset>
                </div>
                <div className={styles.price}>
                    <h1><sup>$</sup>
                        <AnimatedNumber
                            value={priceFormated}
                        />
                        
                    </h1>
                    <img src={Arrows} />
                </div>
                <div className={styles.pizza}>
                    <img src={Pouder} />
                    <img src={PizzaImg} />
                </div>
            </div>
        </>
    )
}

export default Pizza