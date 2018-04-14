import React, { Component } from 'react'

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {
	constructor(props) {
		super(props)

		this.onTabChange = this.onTabChange.bind(this)
		this.state = {
			selectedType: this.props.selectedType
		}
	}

	onTabChange(event) {
		const selectedType = event.target.getAttribute('data-type')
		this.setState({
			selectedType
		})
		if (this.props.onTabChange) {
			this.props.onTabChange(selectedType)
		}
	}

	/**
	 * Render method
	 */
	render() {
		const { selectedType } = this.state
		return (
			<div>
				<span
					className={`tab ${selectedType === 'now_showing' ? 'selected' : ''}`}
					data-type='now_showing'
					onClick={this.onTabChange}
				>
					Now Showing
				</span>
				<span
					className={`tab ${selectedType === 'top_rated' ? 'selected' : ''}`}
					data-type='top_rated'
					onClick={this.onTabChange}
				>
					Top Rated
				</span>
			</div>
		)
	}
}

export default TabBar
