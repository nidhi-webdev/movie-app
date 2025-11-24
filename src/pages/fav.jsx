import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../components/movieCard'


const Fav = () => {
  const { Fav } = useMovieContext();

if(Fav) {
  return 
  
}


  return (
    <div className='fav-empty min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center p-6'>
      <div className='text-center max-w-2xl mx-auto'> 
        {/* Main Content */}
        <h2 className='text-4xl font-bold mb-6 bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent'> 
          No Favorite Movies Yet 
        </h2>
        <p className='text-gray-300 text-lg mb-8 leading-relaxed'> 
          Start adding movies to your favorites and they will appear here.<br/>
          Discover amazing films and build your personal collection! 
        </p>
        
        {/* Action Button */}
        <div className='space-y-4'>
          <button 
            onClick={() => window.history.back()}
            className='px-20 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg'
          >
            🎬 Browse Movies
          </button>
          
          {/* Decoration Elements */}
          <div className='flex items-center justify-center space-x-4 mt-12 opacity-60'>
            <div className='text-2xl'>🍿</div>
            <div className='text-2xl'>🎭</div>
            <div className='text-2xl'>🎪</div>
            <div className='text-2xl'>🎨</div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute -top-4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'></div>
          <div className='absolute -bottom-4 -left-4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl'></div>
        </div>
      </div>
    </div>
  )
}

export default Fav
