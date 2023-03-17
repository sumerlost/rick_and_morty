import React from "react";
import Botones from "./Botones/Botones";
import Mostrador from "./Mostrador/Mostrador";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div>
            <div className={styles.mostrador}>
                <Mostrador />
            </div>
            <hr></hr>
            <div>
                <Botones />
            </div>
            <div>

            </div>


        </div>

    )

}