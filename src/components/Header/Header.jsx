import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";





export default function Header() {





    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="logo.png" alt="Logo" />
            </div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscar..." />
            </div>
            <div className={styles.buttonGroup}>
                <Link to="/"><button className={styles.button}>Inicio</button></Link>
                <Link to="/Personajes"> <button className={styles.button}>Personajes</button></Link>
                <button className={styles.button}>Botón 3</button>
            </div>
        </header>
    );
}