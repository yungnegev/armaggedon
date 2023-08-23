import styles from './page.module.css'
import { fetchAsteroids } from './actions/fetchAsteroids';
import { formatDate } from './utils/formatDate'; 
import LoadAsteroids from './components/loadAsteroids/LoadAsteroids';
import { getTomorrow } from './utils/formatDate';
import Image from 'next/image';
import earth from '../public/earth.png'

export default async function Home() {

  const date = new Date();
  let currentDate = formatDate(date)
  let tomorrowFormatted = formatDate(getTomorrow(date))

  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const data = await fetchAsteroids(currentDate, API_KEY)
  const asteroids = data.near_earth_objects[currentDate]

  return (
    <main className={styles.main}>
      <Image src={earth} alt='earth'/>
      <LoadAsteroids currentDate={tomorrowFormatted} API_KEY={API_KEY} initialData={asteroids}/>
    </main>
  )
}
