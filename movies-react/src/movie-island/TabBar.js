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
				<span className='tab' data-type='now_showing' onClick={this.props.onTabChange}>
					Now Showing
				</span>
				<span className='tab' data-type='top_rated' onClick={this.props.onTabChange}>
					Top Rated
				</span>
			</div>
		)
	}
}

export default TabBar
