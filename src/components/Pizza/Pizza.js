import React, { useState } from "react"

import Arrows from "../../assets/arrows.svg"
import Pouder from "../../assets/pouder.svg"
import PizzaImg from "../../assets/pizza.png"

import styles from "./pizza.module.scss"

const Pizza = () => {
    const sizes = ['Small', 'Medium', 'Xxl'];
    const [active, setActive] = useState('Medium');
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
                    <h1><sup>$</sup>10.50</h1>
                    <img src={Arrows}/>
                </div>
                <div className={styles.pizza}>
                    <img src={Pouder} />
                    <img src={PizzaImg}/>
                </div>
            </div>
        </>
    )
}

export default Pizza