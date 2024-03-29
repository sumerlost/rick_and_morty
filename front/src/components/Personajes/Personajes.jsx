import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Cards from "../Cartas/Cards";
import Muestrario from "./Muestrario";
import NavBot from "./NavBot";


export default function Personajes() {

    const [Personajes, setPersonajes] = useState({})
    const [Page, setPage] = useState(1)
    const numPag = (num) => { return `https://rickandmortyapi.com/api/character/?page=${num}` }

    useEffect(() => {
        fetch(numPag(Page))
            .then((res) => res.json())
            .then((data) => {
                setPersonajes(data.results)
            })
            .catch((error) => console.log(error));

    }, [Page])


    return (
        <div >
            <Muestrario Personajes={Personajes} />
            <NavBot props={Page} control={setPage} />

        </div>

    )
}