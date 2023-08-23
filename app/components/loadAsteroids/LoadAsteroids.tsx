'use client'

import styles from './LoadAsteroids.module.css'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Asteroids from '../asteroids/Asteroids'
import { formatDate, getTomorrowString } from '@/app/utils/formatDate'
import { fetchAsteroids } from '@/app/actions/fetchAsteroids'
import { RotatingLines } from 'react-loader-spinner'

interface Props {
    currentDate: string
    API_KEY: string
    initialData: any[]
}

const LoadAsteroids = ({ currentDate, API_KEY, initialData }: Props) => {

  const [asteroids, setAsteroids] = useState<any[]>(initialData)
  const [date, setDate] = useState<string>(currentDate)
  const [ref, inView] = useInView()
  
  const loadMore = async () => {
    setDate((prev) => {
        const newDate = formatDate(getTomorrowString(prev))
        return newDate
    })
    const newAsteroidData = (await fetchAsteroids(date, API_KEY)) ?? []
    const newAsteroids = newAsteroidData.near_earth_objects[date]
    newAsteroids.date = date
    setAsteroids((prev) => [...prev, ...newAsteroids])
  }

  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  return (
    <section>
      <Asteroids asteroids={asteroids} />
      <div ref={ref} className={styles.loader}>
          <RotatingLines 
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="22"
              visible={true}
            />
      </div>
    </section>
  )
}

export default LoadAsteroids