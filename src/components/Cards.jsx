import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   console.log(characters)
   const pj = characters.map((i, index) => { return (<Card>{i}</Card>) })


   return <div>
      {characters.map((i, index) => { return (<Card {...i} />) })}
   </div>;
}
