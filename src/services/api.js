const API_KEY = "d6c68b28c783e06c555a04afeff05c6a"
const BASE_URL = "https://www.themoviedb.org/"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${BASE_UR}`)
    const data = await response.json()
    return data.results
}