import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PersonajeDetail() {
    const { userId } = useParams()
    const [Pj, setPj] = useState({})
    const [Location, setLocation] = useState("")
    const [Origen, setOrigen] = useState("")
    const [Episodios, setEpisodios] = useState([])

    const formato = (data) => {
        let split = []
        split.push(data.map((i) => { let a = i.split("/"); return a[5] }))
        return split
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setPj(data)
                setLocation(data.location.name)
                setOrigen(data.origin.name)
                console.log(data.episode)
                setEpisodios(formato(data.episode))

            })
            .catch((error) => console.log(error));

    }, [])

    return (
        <div style={{ display: "flex" }}>
            <div >
                <img src={Pj.image} alt="" />
            </div>
            <div>
                <h1>Nombre = {Pj.name}</h1>
                <h3>status= {Pj.status} </h3>
                <h3>Specie= {Pj.species} </h3>
                <h3>Genero= {Pj.gender}</h3>
                <h3>Origen= {Origen}</h3>
                <h3>Ultima localizacion conocida= {Location}</h3>
                <div>

                </div>
                <h3>Episodios= {Episodios}</h3>
            </div>
        </div>

    )
}

