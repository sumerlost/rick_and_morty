import React from "react"
import Cards from "../Cartas/Cards"
import NavBot from "./NavBot"
import { useState } from "react"

export default function Muestrario({ Personajes }) {

    return (
        <div >
            {Personajes.length > 0 && <Cards props={Personajes} id={0} />}
            {Personajes.length > 5 && <Cards props={Personajes} id={5} />}
            {Personajes.length > 10 && <Cards props={Personajes} id={10} />}
            {Personajes.length > 15 && <Cards props={Personajes} id={15} />}

        </div>

    )
}