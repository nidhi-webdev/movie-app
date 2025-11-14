import React from 'react'

const movieCard = () => {

    const onFavClick = () => {

    }


  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movieCard.url}  alt = {movieCard.title} />
            <div className='movie-overlay'> 
                <button className='fav-btn' onClick={onFavClick}>

                </button>
            </div>
      
    </div>
      
    </div>
  )
}

export default movieCard
