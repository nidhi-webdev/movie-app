import { useEffect, useState } from "react";
import { createContext, useContext } from "react";


const MovieContext = createContext()

export const useMovieContext = () =>  useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const raw = localStorage.getItem("favorites")
            return raw ? JSON.parse(raw) : []
        } catch (err) {
            console.error('Falied to read favorites from local Storage:', err)
        }
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))

    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}