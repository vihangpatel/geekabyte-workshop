import React, { Component } from 'react'

const langMap = {
	en: 'English'
}

class Card extends Component {
	render() {
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
					<div>{data.title}</div>
					<div>{langMap[data.original_language]}</div>
					<div>{data.vote_count}</div>
					<div>{data.vote_average}</div>
					<div>{data.overview}</div>
					<div>{data.release_data}</div>
				</div>
			</div>
		)
	}
}

export default Card
