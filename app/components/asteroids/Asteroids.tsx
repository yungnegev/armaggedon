'use client'

import { useState } from 'react'
import styles from './Asteroids.module.css'
import Link from 'next/link'
import { numberWithSpaces } from '@/app/utils/numWithSpace'
import Image from 'next/image'
import ast from '@/public/asteroid.png'
import arrow from '@/public/arrow.svg'
import Button from '../button/Button'

interface Props {
  asteroids: any
}

const Asteroids = ({ asteroids }: Props) => {

  const [units, setUnits] = useState<string>('kilometers')

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
          <div className={styles.buttoncontainer}>
            <button 
              className={styles.button} 
              onClick={() => setUnits('kilometers')}
              style={{
                fontWeight: units === 'kilometers' ? '700' : '400',
              }}
              >
              <span>в километрах</span>
            </button>
            <span>|</span>
            <button 
              className={styles.button} 
              onClick={() => setUnits('lunar')}
              style={{
                fontWeight: units === 'lunar' ? '700' : '400',
              }}
              >
                <span>в лунных орбитах</span>
            </button>
          </div>
        </div>
        <div className={styles.asteroids}>
          {asteroids.map((asteroid: any, index: string) => {
              const formatDist = numberWithSpaces(Math.round(asteroid.close_approach_data[0]['miss_distance'][units]))
              const diameter = Math.round(asteroid.estimated_diameter['meters']['estimated_diameter_max'])
              const ruDate = new Date(
                asteroid.close_approach_data[0]['close_approach_date']
              ).toLocaleString('ru', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              });
              return (
                <div className={styles.asteroid} key={asteroid.id}>
                  <div className={styles.date}>
                    {ruDate}
                  </div>
                  <div className={styles.info}>
                    <div>
                      <div className={styles.kilometer}>
                        {formatDist}{' '}{units === 'kilometers' ? 'км' : 'лунных орбит'}
                        <Image alt='arrow' src={arrow} className={styles.arrow} sizes={'auto'} fill={true}/>
                      </div>  
                    </div>
                    <div className={styles.asteroidimage}>
                      <Image src={ast} width={diameter < 200 ? 22 : 36} alt='asteroid'/>
                    </div>
                    <div>
                      <Link  href={`asteroid/${asteroid.id}`} className={styles.name}>
                        {asteroid.name}
                      </Link>
                      <div className={styles.diameter}>
                        <span>Ø</span> 
                          {diameter} 
                        <span>м</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cartbutton}>
                    <Button>Заказать</Button>
                    <span className={styles.danger}>{asteroid.is_potentially_hazardous_asteroid ? '⚠️ Опасен' : ''}</span>
                  </div>
                </div>
              )
          })}
        </div>
    </div>
  )
}

export default Asteroids