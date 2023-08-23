'use server'

export async function fetchAsteroids(date: string, key: string) {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`
    
    try {
        const response = fetch(apiUrl)
        const data = (await response).json()
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}