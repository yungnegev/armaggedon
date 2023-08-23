import { fetchAsteroid } from '@/app/actions/fetchAsteroid'

export default async function Asteroid({params}: { params: { id: string } }) {
  const API_KEY = 'oW7k1DI2mReZhDSOjUS2McvJtx9Kbk9m30UDcyyI'
  const asteroid = await fetchAsteroid(params.id, API_KEY)
  
  return (
    <main>
      <section>
        <h1>{asteroid.name}</h1>
        <p>Hazordous: {asteroid.is_potentially_hazardous_asteroid ? 'true' : 'false'}</p>
      </section>
      <div>
        List of close approaches:
      </div>
    </main>
  )
}