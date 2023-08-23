'use server'

export const fetchAsteroid = async (id: string, key: string) => {
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`
    try {
        const data = await fetch(apiUrl)
        return data.json()
    } catch (error) {
        console.error(error)
        return null
    }
}