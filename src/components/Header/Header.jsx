import React from "react";
import styles from './style.module.scss'
import { NavLink } from "react-router-dom";
function Header() {
    return(
      <header className={styles.header} >
        <nav className={styles.nav}>
            <NavLink className={styles.navLink} to={"/"}>Home</NavLink>
            <NavLink className={styles.navLink} to={'/register'}>Registration</NavLink>
            <NavLink className={styles.navLink} to={"/login"}>Sign in</NavLink>
            <NavLink className={styles.navLink} to={"/people-page"}>People Page</NavLink>
            <NavLink className={styles.navLink} to={"/todos"}>To Do List</NavLink>
        </nav>
      </header>
    )
}

export default Header