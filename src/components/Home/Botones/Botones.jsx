import React from "react";
import { Link } from "react-router-dom";

export default function Botones() {
    return (
        <div>
            <Link to="/Personajes" ><button>Personajes</button></Link>
            <Link to="/Personajes" ><button>Localizaciones</button></Link>
            <Link to="/Personajes" ><button>Capitulos</button></Link>
        </div >
    )
}