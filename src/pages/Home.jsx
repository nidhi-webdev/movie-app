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
        },
        { 
            id: nanoid(), 
            title: "Terminator", 
            release_date: 1984,
        },
        { 
            id: nanoid(), 
            title: "Dilwale Dulhania Le Jayenge", 
            release_date: 1995,
        },
        { 
            id: nanoid(), 
            title: "Avengers: Endgame", 
            release_date: 2019,
        },
        { 
            id: nanoid(), 
            title: "Inception", 
            release_date: 2010,
        },
        { 
            id: nanoid(), 
            title: "Interstellar", 
            release_date: 2014,
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
        <div className='home'>
            <form onSubmit={handleSubmit} className='search-form'>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                type='text' 
                placeholder='search For Movies...' 
                className='search-input' />
                <button type='submit' className='search-button'> Search </button>
            </form>
            <div className='movie-grid'>
                {movie.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )
                )}
            </div>
        </div>
    )
}

export default Home
