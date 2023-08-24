import styles from './Approach.module.css'
import { LiaMeteorSolid } from 'react-icons/lia'
import { BiTimeFive } from 'react-icons/bi'
import { CgArrowLongLeftC } from 'react-icons/cg'
import { LuOrbit } from 'react-icons/lu'

interface Props {
    date: string
    speed: number
    timeOfApproach: string
    distance: number
    orbitting: string
}

const Approaches = ({ date, speed, timeOfApproach, distance, orbitting }: Props) => {
    return (
      <div className={styles.approach}>
        <h1 className={styles.title}>{date}</h1>
        <div className={styles.entry}>
            <span className={styles.orange}><LiaMeteorSolid /></span>
            <p>Скорость: <span className={styles.orange}>{`${speed} км/ч`}</span></p>
        </div>
        <div className={styles.entry}>
            <span className={styles.orange}><BiTimeFive /></span>
            <p>Время сближения: <span className={styles.orange}>{`${timeOfApproach}`}</span></p>
        </div>
        <div className={styles.entry}>
            <span className={styles.orange}><CgArrowLongLeftC /></span>
            <p>Расстояние от Земли: <span className={styles.orange}>{`${distance} км`}</span></p>
        </div>
        <div className={styles.entry}>
            <span className={styles.orange}><LiaMeteorSolid /></span>
            <p>Орбита: <span className={styles.orange}>{`${orbitting}`}</span></p>
        </div>
      </div>
    )
}

export default Approaches