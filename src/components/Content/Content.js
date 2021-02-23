import React from "react"

import styles from "./content.module.scss"

const Content = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <div className={styles.line} />
                    <p>Select your pizza</p>
                    <div className={styles.line} />
                </div>
                <div className={styles.headline}>
                    <h1>Classic Red</h1>
                    <p>Special pizza sauce, tomatoes, mozzarella, parmesan cheese, red pepper flakes.</p>
                </div>
            </div>
        </>
    )
}

export default Content