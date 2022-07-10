/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Button(props) {
  return (
    <button className={`${styles.btn_container} rounded-3`}>
      {props.content}
    </button>
  )
}