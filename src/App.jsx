import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fav from '../src/pages/fav'
import Home from './pages/Home'

function App() {
  

  return (

    <main className='main-content'>
      <Routes>
        <Route path='/' element = {<Home />}  />
        <Route path='/fav' element= {<Fav />} />
      </Routes>

    </main>
    
  
        
    
  )
}

export default App
