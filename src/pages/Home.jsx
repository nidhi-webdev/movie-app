import { nanoid } from 'nanoid';
import MovieCard from '../components/movieCard';


const Home = () => {
    const movie = [
        { id: nanoid(), title: "John Wick", release_date: 1999 },
        { id: nanoid(), title: "Terminator", release_date: 2000 },
        { id: nanoid(), title: "DDLJ", release_date: 1995 }
    ]
const handleSubmit = () => {

}
   

    return (
        <div className='home'>
            <form onSubmit={handleSubmit} className='search-form'>
                <input type='text' placeholder='search For Movies...' className='search-input' />

            </form>
            <div className='movie-grid'>
                {movie.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home
