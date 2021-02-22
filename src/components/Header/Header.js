import React from "react"
import Arrow from "../../assets/arrow.svg"
import Menu from "../../assets/menu.svg"
import Logo from "../../assets/logo.png"
import Profile from "../../assets/profile.png"
import styles from "./header.module.scss"

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                   <img src={Arrow}/>
                   <img src={Menu}/>
                </div>
                <div className={styles.logo}>
                    <img src={Logo}/>
                </div>
                <div className={styles.right}>
                <img src={Profile}/>
                </div>
            </div>
        </>
    )
}

export default Header