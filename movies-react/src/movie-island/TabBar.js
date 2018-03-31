import React, { Component } from 'react'

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {
	/**
	 * Render method
	 */
	render() {
		return (
			<div>
				<span className='tab'>Now Showing</span>
				<span className='tab'>Top Rated</span>
			</div>
		)
	}
}

export default TabBar
