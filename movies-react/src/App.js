// Library Imports
import React, { Component } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

// App Component Imports
import TabBar from './movie-island/TabBar'
import List from './movie-island/List'

// API url config
import { nowShowingUrl, topRatedUrl } from './movie-island/apiConfig'

class App extends Component {
	constructor() {
		super()

		this.onTabChange = this.onTabChange.bind(this)
		this.state = { selectedType: 'now_showing' }
	}

	componentDidMount() {
		this.fetchData(this.state.selectedType)
	}

	onTabChange(selectedType) {
		this.fetchData(selectedType)
	}

	fetchData(selectedType) {
		switch (selectedType) {
			case 'now_showing': {
				axios.get(nowShowingUrl).then(response => {
					this.setState({
						nowShowing: response.data.results,
						selectedType
					})
				})
				break
			}

			case 'top_rated':
				axios.get(topRatedUrl).then(response => {
					this.setState({
						topRated: response.data.results,
						selectedType
					})
				})
				break

			default:
				break
		}
	}

	render() {
		const { selectedType, nowShowing, topRated } = this.state
		console.log(nowShowing)
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>Welcome to Movie-island</h1>
				</header>
				<p className='App-intro'>Click on the Following Tabs</p>
				<TabBar selectedType={selectedType} onTabChange={this.onTabChange} />
				{selectedType === 'top_rated' && topRated && <List data={topRated} />}
				{selectedType === 'now_showing' && nowShowing && <List data={nowShowing} />}
			</div>
		)
	}
}

export default App
