import React from "react";
import style from "./SearchBar.module.css"

export default function SearchBar() {
    return (
        <div className={style.SearchBar}>
            <input type="text" className={style.SearchBar} />
        </div>
    )
}