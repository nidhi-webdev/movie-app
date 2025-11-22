import { useEffect, useState } from "react";
import { createContext } from "react";


const MovieContext = createContext()

export const useMovieContext = useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
      const storedFav = localStorage.getItem("favorites")

      if(storedFav) setFavorites(JSON.parse(storedFav))
    
      return () => {
        second
      }
    }, [third])
    


    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}