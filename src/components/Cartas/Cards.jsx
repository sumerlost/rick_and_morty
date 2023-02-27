import React from 'react';
import Card from './Card';
import style from "./card.module.css"
import { useEffect, useState } from 'react';

export default function Cards({ props, id }) {


   return <div className={style.Cards}>

      <Card  {...props[id]} />
      <Card  {...props[id + 1]} />
      <Card  {...props[id + 2]} />
      <Card  {...props[id + 3]} />

   </div>;
}
