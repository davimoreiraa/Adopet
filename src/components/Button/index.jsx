/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Link from 'next/link'

export default function Button(props) {
  return (
    <Link href={props.href} crossorigin>
      <button onClick={props.click} className={`${styles.btn_container} rounded-3`} type={props.type}>
        {props.content}
      </button>
    </Link>
  )
}