/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Input(props) {
  return (
    <div>
      <input 
        className={`${props.dark ? styles.dark_background : ""} ${styles.input} shadow-sm rounded`} 
        placeholder={props.placeholder} 
        type={props.type}
        name={props.name}
        required={props.required}
        />
    </div>
  )
}