import styles from './page.module.css'
import Approach from '@/app/components/approach/Approach'
import { fetchAsteroid } from '@/app/actions/fetchAsteroid'
import { numberWithSpaces } from '@/app/utils/numWithSpace'
import Image from 'next/image'
import ast from '@/public/asteroid.png'

export default async function Asteroid({ params }: { params: { id: string } }) {
  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const asteroid = await fetchAsteroid(params.id, API_KEY)

  const formatDistKm = numberWithSpaces(Math.round(asteroid.close_approach_data[0]['miss_distance']['kilometers']))
  const formatDistLunar = numberWithSpaces(Math.round(asteroid.close_approach_data[0]['miss_distance']['lunar']))
  const diameter = Math.round(asteroid.estimated_diameter['meters']['estimated_diameter_max'])
  
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.asteroidimage}>
          <Image src={ast} width={diameter < 200 ? 22 : 36} alt='asteroid'/>
        </div>
        <h1>{`Информация о ${asteroid.name}`}</h1>
        <p>{asteroid.is_potentially_hazardous_asteroid ? '⚠️ Опасен' : ''}</p>
        <div className={styles.asteroid} key={asteroid.id}>
          <div className={styles.info}>
            <div className={styles.didstance}>
                <p>Расстояние от Земли в километрах:<span className={styles.value}>{` ${formatDistKm} км`}</span></p>
                <p>Расстояние от Земли в лунных орбитах:<span className={styles.value}>{` ${formatDistLunar} лунных орбит`}</span></p>
                <p>Диаметр:<span className={styles.value}>{` ${diameter} м`}</span></p>
            </div>
          </div>
          <div className={styles.approaches}>
            <p>Список сближений:</p>
          </div>
        </div>
      </section>
      <section className={styles.approachlist}>
        {asteroid.close_approach_data.map((approach: any, index: number) => {
          const date = approach['close_approach_date']
          const ruDate = new Date(
            approach['close_approach_date']
          ).toLocaleString('ru', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });
          const speed = Math.round(approach['relative_velocity']['kilometers_per_hour'])
          const timeOfApproach = approach['close_approach_date_full']
          const distance = Math.round(approach['miss_distance']['kilometers'])
          const orbitting = approach['orbiting_body']
          return <Approach 
                    key={index} 
                    date={ruDate}
                    speed={speed}
                    timeOfApproach={timeOfApproach}
                    distance={distance}
                    orbitting={orbitting}
                    />
        })}
      </section>
    </main>
  )
}