import { nanoid } from 'nanoid';
import MovieCard from '../components/movieCard';
import { useState } from 'react';


const Home = () => {
    // For Search 
    const [searchQuery, setSearchQuery] = useState("")


    const movie = [
        { 
            id: nanoid(), 
            title: "John Wick", 
            release_date: 2014,
            url: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
        },
        { 
            id: nanoid(), 
            title: "Terminator", 
            release_date: 1984,
            url: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg"
        },
        { 
            id: nanoid(), 
            title: "Dilwale Dulhania Le Jayenge", 
            release_date: 1995,
            url: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
        },
        { 
            id: nanoid(), 
            title: "Avengers: Endgame", 
            release_date: 2019,
            url: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
        },
        { 
            id: nanoid(), 
            title: "Inception", 
            release_date: 2010,
            url: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
        },
        { 
            id: nanoid(), 
            title: "Interstellar", 
            release_date: 2014,
            url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Search functionality is handled by the filter below
            console.log(`Searching for: ${searchQuery}`)
        }
    }




    return (
        <div className='min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-violet-900'>
            {/* Hero Section */}
            <div className='relative overflow-hidden'>
                <div className='absolute inset-0 bg-black/20'></div>
                <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='text-center'>
                        <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>
                            🎬 Movie Discovery
                        </h1>
                        <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                            Discover amazing movies, find your favorites, and explore the world of cinema
                        </p>
                        
                        {/* Search Form */}
                        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
                            <div className='relative flex flex-col sm:flex-row gap-4 sm:gap-0'>
                                <div className='relative flex-1'>
                                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                                        </svg>
                                    </div>
                                    <input 
                                        value={searchQuery} 
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        type='text' 
                                        placeholder='Search for movies...' 
                                        className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-l-xl sm:rounded-r-none rounded-r-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                    />
                                </div>
                                <button 
                                    type='submit' 
                                    className='px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-r-xl sm:rounded-l-none rounded-l-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                                >
                                    <span className='flex items-center'>
                                        🔍 Search
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Movies Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='mb-8'>
                    <h2 className='text-3xl font-bold text-white mb-2'>
                        {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Movies'}
                    </h2>
                    <div className='h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 rounded'></div>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {movie.map((movie) => 
                        (!searchQuery || movie.title.toLowerCase().includes(searchQuery.toLowerCase())) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
                
                {/* No Results Message */}
                {searchQuery && !movie.some(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())) && (
                    <div className='text-center py-12'>
                        <div className='text-6xl mb-4'>🎭</div>
                        <h3 className='text-2xl font-bold text-white mb-2'>No movies found</h3>
                        <p className='text-gray-400 mb-6'>Try searching with different keywords</p>
                        <button 
                            onClick={() => setSearchQuery("")}
                            className='px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300'
                        >
                            Clear Search
                        </button>
                    </div>
                )}
                
                {/* Empty State for No Search */}
                {!searchQuery && movie.length === 0 && (
                    <div className='text-center py-12'>
                        <div className='text-6xl mb-4'>🍿</div>
                        <h3 className='text-2xl font-bold text-white mb-2'>No movies available</h3>
                        <p className='text-gray-400'>Check back later for more movies!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
