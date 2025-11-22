import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fav from '../src/pages/fav'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MovieProvider from '../src/Context/MovieContext'

function App() {


  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fav' element={<Fav />} />
        </Routes>

      </main>
    </MovieProvider>





  )
}

export default App
