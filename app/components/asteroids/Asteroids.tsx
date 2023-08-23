'use client'

import styles from './asteroids.module.css'

const Asteroids = ({ asteroids }:any) => {
  return (
    <div className={styles.container}>
        {asteroids.map((asteroid: any, index: string) => {
            return (
            <div key={index} className={styles.asteroid}>
                <div>
                {asteroid.name}
                </div>
                <div>
                {asteroid.estimated_diameter['meters']['estimated_diameter_max']}
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Asteroids