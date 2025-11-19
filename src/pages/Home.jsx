import { nanoid } from 'nanoid';
import MovieCard from '../components/movieCard';
import { useState,useEffect } from 'react';
import { getPopularMovies, searchMovies } from '../services/api'


const Home = () => {
    // For Search 
    const [searchQuery, setSearchQuery] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovie(popularMovies)
            }
        }

       
    }, [])




    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Search functionality is handled by the filter below
            console.log(`Searching for: ${searchQuery}`)
        }
    }




    return (
        <div className='home min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 p-6'>
            <div className='max-w-6xl mx-auto'>

                {/* Search Form */}
                <form onSubmit={handleSubmit} className='search-form max-w-2xl mx-auto mb-12'>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type='text'
                            placeholder='Search for movies...'
                            className='search-input flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-l-xl sm:rounded-r-none rounded-r-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                        />
                        <button
                            type='submit'
                            className='search-button px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-r-xl sm:rounded-l-none rounded-l-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500'
                        >
                            Search
                        </button>
                    </div>
                </form>

                {/* Movies Grid */}
                <div className='movie-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {movie.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
