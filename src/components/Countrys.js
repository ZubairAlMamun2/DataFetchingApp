import React from 'react'
import Country from './country'
import style from "./countrys.module.css";
import { v4 as uuidv4 } from 'uuid';

const Countrys = (props) => {
  return (
    <section className={style.countries}>
      {props.countrys.map((country)=>{
        const newCountry={country,id:uuidv4()}

        return<Country {...newCountry} id={newCountry.id} onRemove={props.onRemove}/>
      })}
    </section>
  )
}

export default Countrys