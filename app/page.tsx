import styles from './page.module.css'
import { fetchAsteroids } from './actions/fetchAsteroids';
import { formatDate } from './utils/formatDate'; 
import Asteroids from './components/asteroids/Asteroids';

export default async function Home() {

  const date = new Date();
  let currentDate = formatDate(date)

  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const data = await fetchAsteroids(currentDate, API_KEY)
  const asteroids = data.near_earth_objects[currentDate]

  return (
    <main className={styles.main}>
      <Asteroids asteroids={asteroids} />
    </main>
  )
}
