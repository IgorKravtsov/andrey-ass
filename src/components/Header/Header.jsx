import React, {useState} from "react";
import styles from './style.module.scss'
import { NavLink } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa"
function Header() {
    let [cartOpen, setCartOpen] = useState(false);
    
    return(
      <header className={styles.header} >
        <nav className={styles.nav}>
            <NavLink className={styles.navLink} to={"/"}>Home</NavLink>
            <NavLink className={styles.navLink} to={'/register'}>Registration</NavLink>
            <NavLink className={styles.navLink} to={"/login"}>Sign in</NavLink>
            <NavLink className={styles.navLink} to={"/people-page"}>People Page</NavLink>
            <NavLink className={styles.navLink} to={"/todos"}>To Do List</NavLink>
           </nav>
           <div className={styles.cartButtonWrapper}>
              <FaShoppingCart onClick={() =>{ setCartOpen(cartOpen = !cartOpen)}} className={[styles.shopcartbutton, cartOpen && styles.shopcartbuttonActive].join(' ')} />
              </div>
      </header>
    )
}

export default Header