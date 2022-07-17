/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ ICONS -------------------*/
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Input(props) {
  const [showPassword, setShowPassword] = useState(props.type)

  return (
    <div>
      <input 
        className={`${props.dark ? styles.dark_background : ""} ${styles.input} shadow-sm rounded`} 
        placeholder={props.placeholder} 
        type={props.type}
        name={props.name}
        />
    </div>
  )
}