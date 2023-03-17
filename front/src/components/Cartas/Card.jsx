import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./card.module.css"
import { useDispatch } from "react-redux"
import { getFavoritos } from "../Redux/Actions";


export default function Card(props) {

   const dispatch = useDispatch()
   const HandleFav = (obj) => {
      dispatch(getFavoritos(obj))

   }
   return (
      <Link to={`/Personajes/${props.id}`} >
         <div className={styles.Card}>
            <div className={styles.header}>
               <h2 style={{ textAlign: "center" }}>{props.name}</h2>
               <h4 style={{ textAlign: "center" }}>{props.status}</h4>

            </div>
            <div>
               <img className={styles.image} src={props.image} alt="" />
            </div>
            <div className={styles.info}>
               <div>
                  <span>specie:{props.species}</span>
               </div>
               <hr className={styles.hr} />
               <div>
                  <span>gender:{props.gender}</span>
               </div>
            </div>
         </div>
      </Link>
   );
}
