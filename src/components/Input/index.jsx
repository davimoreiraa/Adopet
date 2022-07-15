/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/
import { AiFillEye } from 'react-icons/ai';

export default function Input(props) {
  return (
    <div>
      <span className={`${styles.icon_container} cursor-pointer position-absolute end-0`}>
        <AiFillEye/>
      </span>
      <input 
        className={`${props.dark ? styles.dark_background : ""} ${styles.input} shadow-sm rounded`} 
        placeholder={props.placeholder} 
        type={props.type}
        name={props.name}
      />
    </div>
  )
}