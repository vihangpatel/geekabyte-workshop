import React, { Component } from 'react'

const langMap = {
  en: 'English'
}

class Card extends Component {
  render () {
    const { data } = this.props

    if (!data) {
      return
    }

    return (
      <div className='card'>
        <div className='img-container'>
          <img className='poster-img' src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
        </div>
        <div className='card-detail'>
          <span>{langMap[data.original_language]}</span>
          <span>{data.vote_count}</span>
          <span>{data.vote_average}</span>
          <span>{data.overview}</span>
          <span>{data.release_data}</span>
        </div>
      </div>
    )
  }
}

export default Card
