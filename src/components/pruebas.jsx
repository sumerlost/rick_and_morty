import React from "react"
import { style } from "./Pruebas.module.css"

export default function Prueba() {
    return (
        <div style={style.main}>
            <div style={style.card - image}>
                <img src="https://www.dropbox.com/s/kv60gxvmfv2nwmd/profile-2092113_640.png?raw=1" alt="" />
            </div>

            <div >
                <div style={style.card - title}>Mark Methew</div>
                <div style={"per-position"}>Senior Designer</div>
                <div style={"social-icons"}>
                    <i style={"fab fa-linkedin-in"} title="LinkedIn"></i>
                    <i style={"fab fa-twitter"} title="Twitter"></i>
                    <i style={"fab fa-facebook-f"} title="Facebook"></i>
                </div>
                <div style={"card-btn"}>
                    <button type="button" title="Send Message">Send Message</button>
                </div>
            </div>
        </div>)
}