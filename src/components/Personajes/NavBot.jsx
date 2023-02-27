import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function NavBot({ props, control }) {


    const [Pages, setPages] = useState(0)

    useEffect(() => { setPages(5) }, [])
    useEffect(() => { if (props === Pages) { setPages(Pages + 1) } }, [Pages])

    return (
        <div>

            <button onClick={() => control(Pages - 4)}>{Pages - 4}</button>
            <button onClick={() => control(Pages - 3)}>{Pages - 3}</button>
            <button onClick={() => control(Pages - 2)}>{Pages - 2}</button>
            <button onClick={() => control(Pages - 1)}>{Pages - 1}</button>
            <button onClick={() => control(Pages)}    >{Pages}</button>
            <button onClick={() => control(Pages + 1)}>{Pages + 1}</button>
            <button onClick={() => control(Pages + 2)}>{Pages + 2}</button>
            <button onClick={() => control(Pages + 3)}>{Pages + 3}</button>
            <button onClick={() => control(Pages + 4)}>{Pages + 4}</button>



        </div>
    )
}