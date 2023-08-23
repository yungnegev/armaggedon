import styles from './page.module.css'
import { fetchAsteroids } from './actions/fetchAsteroids';
import { formatDate } from './utils/formatDate'; 
import LoadMore from './components/loadAsteroids/LoadAsteroids';
import { getTomorrow } from './utils/formatDate';

export default async function Home() {

  const date = new Date();
  let currentDate = formatDate(date)
  let tomorrow = getTomorrow(date)
  let tomorrowFormatted = formatDate(tomorrow)

  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const data = await fetchAsteroids(currentDate, API_KEY)
  const asteroids = data.near_earth_objects[currentDate]




  return (
    <main className={styles.main}>
      <LoadMore currentDate={tomorrowFormatted} API_KEY={API_KEY} initialData={asteroids}/>
    </main>
  )
}
