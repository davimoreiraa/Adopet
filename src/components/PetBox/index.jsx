/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ ICONS -------------------*/
import ChatIcon from '../../assets/Chat_icon'

/* ------------------ COMPONENTS -------------------*/
import Image from 'next/image'

export default function PetBox(props) {
  return (
    <div className={`${styles.pet_box_container} rounded-3 col-12 col-sm-8 col-md-5 col-xxl-3 d-flex align-items-center justify-content-center `}>
      <div className={`${styles.pet_picture_container} d-flex`}>
        <Image src={props.img_src} alt={props.img_alt} layout='intrinsic'/>
      </div>
      <div className={`${styles.pet_infos_container}`}>
        <h1 className={`${styles.pet_name}`}>
          {props.name}
        </h1>
        <ul className={`${styles.list_infos}`}>
          <li>{props.age}</li>
          <li>{props.size}</li>
          <li>{props.behavior}</li>
        </ul>
        <div className={styles.container}>
          <p className={styles.localization}>{props.localization}</p> 
            <span className={styles.chat_icon}><ChatIcon/> Falar com responsável</span>
        </div>
      </div>
    </div>
  )
}