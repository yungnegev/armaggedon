import styles from './page.module.css'

export default async function Home() {

  // Date object
const date = new Date();

  let currentDay= String(date.getDate()).padStart(2, '0');

  let currentMonth = String(date.getMonth()+1).padStart(2,"0");

  let currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY 

  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=${API_KEY}`)
  const data = await response.json()

  console.log(data)
  console.log(currentDate)

  return (
    <main>
      {data.near_earth_objects[currentDate].map((asteroid: any, index: string) => {
        return (
          <div key={index}>
            {asteroid.name}
          </div>
        )
      })}
    </main>
  )
}
