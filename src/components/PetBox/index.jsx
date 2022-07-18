/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function PetBox(props) {
  return (
    <div className={`${styles.pet_box_container}`}>
      <div className={`${styles.pet_picture_container} d-flex`}>

      </div>
      <div className={`${styles.pet_infos_container}`}>
        <h1 className={`${styles.pet_name}`}>
          {props.name}
        </h1>
        <h2>
          {props.age}
          <br />
          {props.size}
          <br />
          {props.behavior}
          <br />
          {props.localization}
          <br />
        </h2>
      </div>
    </div>
  )
}