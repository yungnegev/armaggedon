'use client'

import { use, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Spinner from '../spinner/Spinner'
import Asteroids from '../asteroids/Asteroids'
import { formatDate, getTomorrowString } from '@/app/utils/formatDate'
import { fetchAsteroids } from '@/app/actions/fetchAsteroids'

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
    console.log(date)
    const newAsteroidData = (await fetchAsteroids(date, API_KEY)) ?? []
    const newAsteroids = newAsteroidData.near_earth_objects[date]
    setAsteroids((prev) => [...prev, ...newAsteroids])
  }

  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  return (
    <>
    <Asteroids asteroids={asteroids} />
    <div ref={ref}>
        <Spinner />
    </div>
    </>
  )
}

export default LoadAsteroids